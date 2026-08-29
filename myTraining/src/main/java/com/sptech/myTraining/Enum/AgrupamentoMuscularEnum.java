package com.sptech.myTraining.Enum;

public enum AgrupamentoMuscularEnum {

    PEITO(1, "Peito"),
    COSTAS(2, "Costas"),
    OMBRO(3, "Ombro"),
    BICEPS(4, "Bíceps"),
    TRICEPS(5, "Tríceps"),
    ANTEBRACO(6, "Antebraço"),
    ABDOMEN(7, "Abdômen"),
    QUADRICEPS(8, "Quadríceps"),
    POSTERIOR_DE_COXA(9, "Posterior de Coxa"),
    GLUTEO(10, "Glúteo"),
    PANTURRILHA(11, "Panturrilha"),
    TRAPEZIO(12, "Trapézio"),
    LOMBAR(13, "Lombar"),
    ADUTORES(14, "Adutores"),
    ABDUTORES(15, "Abdutores");

    private final int id;
    private final String nome;

    AgrupamentoMuscularEnum(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }
}