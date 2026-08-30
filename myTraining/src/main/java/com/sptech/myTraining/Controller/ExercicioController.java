package com.sptech.montadorDeTreino.Controller;


import com.sptech.montadorDeTreino.Dto.ExercicioDto;
import com.sptech.montadorDeTreino.Dto.TreinoDto;
import com.sptech.montadorDeTreino.Enum.AgrupamentoMuscularEnum;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@RestController
@RequestMapping("/exercicios")
public class ExercicioController {

    private final JdbcTemplate template;

    public ExercicioController(JdbcTemplate template) {
        this.template = template;
    }

    @PostMapping
    public ResponseEntity<ExercicioDto> salvarTreino(@RequestBody ExercicioDto exercicioDto) {

        if(validarCampos(exercicioDto)){

            return ResponseEntity.status(404).body(null);
        }

        String sql = "INSERT INTO Exercicio ( nome, descricao, agrupamentoMuscular, idTreino, series) VALUES (?,?,?, ?,?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        template.update(con -> {
            PreparedStatement statement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            statement.setString(1, exercicioDto.getNome());
            statement.setString(2, exercicioDto.getDescricao());
            statement.setInt(3, exercicioDto.getAgrupamentoMuscular().getId());
            statement.setInt(4, exercicioDto.getTreino().getId());
            statement.setInt(5, exercicioDto.getSeries());


        return statement;
        }, keyHolder);

        int idExercicio  = keyHolder.getKey().intValue();
        exercicioDto.setId(idExercicio);

        return ResponseEntity.status(201).body(exercicioDto);
    }

    @GetMapping
    public ResponseEntity<List<ExercicioDto>> buscarTreinoPorId (@RequestParam Integer id) {

        if(id== null){
            return ResponseEntity.status(404).body(null);
        }

        String sql = "SELECT * \n" +
                "FROM exercicio ex \n" +
                "JOIN treino t ON ex.idTreino = t.id \n" +
                "WHERE t.id = ?";

        List<ExercicioDto> resultados = template.query(sql, new BeanPropertyRowMapper<>(ExercicioDto.class), id);

        if(resultados.isEmpty()){
            return ResponseEntity.status(204).build();
        }

        return ResponseEntity.status(200).body(resultados);


    }



    public Boolean validarCampos (ExercicioDto exercicioDto) {
        if(exercicioDto.getNome() == null || exercicioDto.getNome().isEmpty()||
                exercicioDto.getTreino() == null ||
                exercicioDto.getSeries() == null || exercicioDto.getSeries() < 0 || exercicioDto.getSeries().equals(0) ||
                exercicioDto.getAgrupamentoMuscular() == null
        ) {
            return false;
        }
        return true;
    }

}
