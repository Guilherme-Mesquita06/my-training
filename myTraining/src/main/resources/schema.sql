-- Tabela Treino
CREATE TABLE treino (
                        id INT PRIMARY KEY AUTO_INCREMENT ,
                        nome VARCHAR(100) NOT NULL,
                        observacao VARCHAR(255)
);

-- Tabela de apoio para o Enum AgrupamentoMuscular
CREATE TABLE agrupamento_muscular (
                                      id INT PRIMARY KEY,
                                      nome VARCHAR(50) NOT NULL
);

-- Tabela Exercicio
CREATE TABLE exercicio (
                           id INT AUTO_INCREMENT PRIMARY KEY,
                           nome VARCHAR(100) NOT NULL,
                           descricao VARCHAR(255),
                           series INT,
                           agrupamentoMuscular INT NOT NULL,
                           idTreino INT NOT NULL,
                           CONSTRAINT exercicioAgrupamento FOREIGN KEY (agrupamentoMuscular) REFERENCES agrupamento_muscular(id),
                           CONSTRAINT exercicioTreino FOREIGN KEY (idTreino) REFERENCES treino(id)
);




-- Populando a tabela de agrupamento muscular
INSERT INTO agrupamento_muscular (id, nome) VALUES
                                                (1, 'Peito'),
                                                (2, 'Costas'),
                                                (3, 'Ombro'),
                                                (4, 'Bíceps'),
                                                (5, 'Tríceps'),
                                                (6, 'Antebraço'),
                                                (7, 'Abdômen'),
                                                (8, 'Quadríceps'),
                                                (9, 'Posterior de Coxa'),
                                                (10, 'Glúteo'),
                                                (11, 'Panturrilha'),
                                                (12, 'Trapézio'),
                                                (13, 'Lombar'),
                                                (14, 'Adutores'),
                                                (15, 'Abdutores');


-- Treino 1
INSERT INTO treino (nome, observacao) VALUES
    ('Treino de Costas, Bíceps e Abdômen', 'Foco em parte baixa da dorsal e a cabeça longa do bíceps');

-- Exercícios do Treino 1 (assumindo id do treino = 1, primeiro registro)
--
-- -- Costas (agrupamentoMuscular = 2) — ênfase em parte baixa do latíssimo
-- INSERT INTO exercicio (nome, descricao, series, agrupamentoMuscular, idTreino) VALUES
--        ('Puxada Frente Pegada Supinada', 'Pegada supinada, foco em depressão escapular e ativação da parte baixa do latíssimo', 4, 2, 1),
--        ('Pullover na Polia Alta (Corda)', 'Braços estendidos, isola a parte baixa do dorsal sem envolver muito o bíceps', 3, 2, 1),
--        ('Remada Curvada Pegada Pronada', 'Movimento composto para espessura geral das costas', 4, 2, 1),
--        ('Remada Baixa Triângulo', 'Pegada neutra, foco em contração da parte média/baixa das costas', 3, 2, 1),
--
-- -- Bíceps (agrupamentoMuscular = 4) — ênfase em cabeça longa
--        ('Rosca Direta Inclinada com Halteres', 'Banco inclinado, braço atrás do tronco para maior alongamento da cabeça longa', 4, 4, 1),
--        ('Rosca Alternada em Pé com Halteres', 'Cotovelo levemente atrás do corpo para manter ênfase na cabeça longa', 3, 4, 1),
--
-- -- Abdômen (agrupamentoMuscular = 7)
--        ('Abdominal Supra na Polia', 'Flexão de tronco com resistência do cabo, foco na porção superior', 3, 7, 1),
--        ('Elevação de Pernas na Barra Fixa', 'Foco na porção inferior do abdômen e controle de quadril', 3, 7, 1);
