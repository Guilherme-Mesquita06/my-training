package com.sptech.myTraining.Controller;


import com.sptech.myTraining.Dto.ExercicioDto;
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
@CrossOrigin(origins = "http://localhost:5173")
public class ExercicioController {

    private final JdbcTemplate template;

    public ExercicioController(JdbcTemplate template) {
        this.template = template;
    }

    @PostMapping
    public ResponseEntity<ExercicioDto> salvarTreino(@RequestBody ExercicioDto exercicioDto) {

        if(!(validarCampos(exercicioDto))){

            return ResponseEntity.status(400).body(exercicioDto);
        }

        String sql = "INSERT INTO Exercicio ( nome, descricao, agrupamentoMuscular, idTreino, serie) VALUES (?,?,?, ?,?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        template.update(con -> {
            PreparedStatement statement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            statement.setString(1, exercicioDto.getNome());
            statement.setString(2, exercicioDto.getDescricao());
            statement.setString(3, exercicioDto.getAgrupamentoMuscular());
            statement.setInt(4, exercicioDto.getIdTreino());
            statement.setInt(5, exercicioDto.getSerie());


        return statement;
        }, keyHolder);

        int idExercicio  = keyHolder.getKey().intValue();
        exercicioDto.setId(idExercicio);

        return ResponseEntity.status(201).body(exercicioDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<ExercicioDto>> buscarExerciciosPorTreinoId(@PathVariable("id") Integer id) {

        String sql = "SELECT * FROM exercicio WHERE idTreino = ?";

        List<ExercicioDto> resultados = template.query(sql, new BeanPropertyRowMapper<>(ExercicioDto.class), id);



        return ResponseEntity.status(200).body(resultados);
    }



    public Boolean validarCampos (ExercicioDto exercicioDto) {
        if(exercicioDto.getNome() == null || exercicioDto.getNome().isEmpty()||
                exercicioDto.getIdTreino() == null ||
                exercicioDto.getSerie() == null || exercicioDto.getSerie() < 0 || exercicioDto.getSerie().equals(0) ||
                exercicioDto.getAgrupamentoMuscular() == null || exercicioDto.getAgrupamentoMuscular().isEmpty()
        ) {
            return false;
        }
        return true;
    }

}
