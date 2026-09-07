package com.sptech.myTraining.Dto;


public class ExercicioDto {

    private Integer id;
    private String nome;
    private String descricao;
    private String agrupamentoMuscular;
    private Integer idTreino;
    private Integer serie;



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

    public String getAgrupamentoMuscular() {
        return agrupamentoMuscular;
    }

    public void setAgrupamentoMuscular(String agrupamentoMuscular) {
        this.agrupamentoMuscular = agrupamentoMuscular;
    }

    public Integer getIdTreino() {
        return idTreino;
    }

    public void setIdTreino(Integer idTreino) {
        this.idTreino = idTreino;
    }

    public Integer getSerie() {
        return serie;
    }

    public void setSerie(Integer serie) {
        this.serie = serie;
    }
}
