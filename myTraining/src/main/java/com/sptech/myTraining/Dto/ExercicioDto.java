package com.sptech.myTraining.Dto;

import com.sptech.myTraining.Enum.AgrupamentoMuscularEnum;

public class ExercicioDto {

    private Integer id;
    private String nome;
    private String descricao;
    private AgrupamentoMuscularEnum agrupamentoMuscular;
    private TreinoDto treino;
    private Integer series;



    public Integer getSeries() {
        return series;
    }

    public void setSeries(Integer series) {
        this.series = series;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public AgrupamentoMuscularEnum getAgrupamentoMuscular() {
        return agrupamentoMuscular;
    }

    public void setAgrupamentoMuscular(AgrupamentoMuscularEnum agrupamentoMuscular) {
        this.agrupamentoMuscular = agrupamentoMuscular;
    }

    public TreinoDto getTreino() {
        return treino;
    }

    public void setTreino(TreinoDto treino) {
        this.treino = treino;
    }
}
