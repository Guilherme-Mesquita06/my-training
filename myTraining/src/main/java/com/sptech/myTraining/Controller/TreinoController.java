package com.sptech.myTraining.Controller;

import com.sptech.myTraining.Dto.TreinoDto;
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
@RequestMapping("/treinos")
public class TreinoController {

    private final JdbcTemplate template;

    public TreinoController(JdbcTemplate template) {
        this.template = template;
    }


    @PostMapping
    public ResponseEntity<TreinoDto> salvarTreino(@RequestBody TreinoDto treinoDto) {

        if(treinoDto.getNome() == null || treinoDto.getNome().isEmpty()){
            return ResponseEntity.status(404).body(null);
        }


        String sql = "INSERT INTO Treino (nome, observacao) VALUES (?,?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();

        template.update(con -> {
            PreparedStatement preparedStatement = con.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1, treinoDto.getNome());
            preparedStatement.setString(2, treinoDto.getObservacao());
            return preparedStatement;
        }, keyHolder);

        int idTreino = keyHolder.getKey().intValue();

        treinoDto.setId(idTreino);

        return ResponseEntity.status(201).body(treinoDto);
    }

    @GetMapping
    public ResponseEntity<List<TreinoDto>> listarTreinos() {
        String sql = "SELECT * FROM Treino";

        List<TreinoDto> result = template.query(sql, new BeanPropertyRowMapper<>(TreinoDto.class));

        return ResponseEntity.status(200).body(result);



    }

}
