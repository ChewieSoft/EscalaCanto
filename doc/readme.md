# Modelo Entidade Relacionamento

- [Modelo Entidade Relacionamento](#modelo-entidade-relacionamento)
  - [Modelo](#modelo)
    - [MER Entidades](#mer-entidades)
    - [Entidades com atributos](#entidades-com-atributos)
    - [Material de Apoio teórico](#material-de-apoio-teórico)
  - [Entidades](#entidades)
    - [Músicas](#músicas)
    - [Artista](#artista)
    - [Músicos](#músicos)
    - [Escala Culto](#escala-culto)
    - [Função](#função)
  - [Notas](#notas)
    - [Versão](#versão)
  - [Histórico dos Encontros](#histórico-dos-encontros)
    - [2025/Mar/15](#2025mar15)
      - [Anotações do Bill](#anotações-do-bill)
      - [Anotações do Gabriel](#anotações-do-gabriel)
  - [Modelo](#modelo-1)
    - [Ver4](#ver4)
    - [Ver5](#ver5)
  - [🔗 Convenção de Nomenclatura para Chaves Estrangeiras](#-convenção-de-nomenclatura-para-chaves-estrangeiras)
    - [📌 Relações 1:N → `fk_atributo`](#-relações-1n--fk_atributo)
    - [🔁 Relações N:N (Tabelas Associativas / Pivot) → `atributo_id`](#-relações-nn-tabelas-associativas--pivot--atributo_id)
    - [✅ Resumo das boas práticas](#-resumo-das-boas-práticas)

## Modelo

- [draw.io](https://app.diagrams.net/#HChewieSoft%2FEscalaCanto%2Fmain%2Fmodelo_entidade_relacionamento.drawio#%7B%22pageId%22%3A%22eujvrq_PeS3J3ftfPqxR%22%7D)

### MER Entidades

![DER](./assets/modelo_entidade_relacionamento-MER_ver3.svg)

### Entidades com atributos

![DER](./assets/modelo_entidade_relacionamento-MER_ver4.drawio.svg)

### Material de Apoio teórico

:link: [DevMedia - MER e DER: Modelagem de Bancos de Dados](https://www.devmedia.com.br/mer-e-der-modelagem-de-bancos-de-dados/14332)

---

## Entidades

### Músicas

São as músicas que vamos executar nos cultos, evento set cetera

### Artista

É o profissional que compoe ou interpreta a música.

### Músicos

São os integrates do ministério de música de cada igreja local, sejam instrumentistas, sejam vocalistas

### Escala Culto

São os dias oficiais de reunião dos membros e eventos  da comunidade

### Função

O papel exercido pelos músicos escalados no culto ou seu substituto(a)

## Notas

### Versão

Adicionaremos além do `Artista` a versão que ele está interpretando, pois pode acontecer dele tocar versões diferentes da mesma música, inicialmente será um **`atributo`** da entidade `Músicas`.

Ex. versão estudio,e a versão ao vivo ter outra roupagem

## Histórico dos Encontros

### 2025/Mar/15

Juntamos Jorge Ferrari, Bill e Gabriel, para pensarmos nos atributos do modelo.

#### Anotações do Bill

```text
Entidade artista 
✅ Nome
✅ Fk música (pivot)

Entidade música
✅ Nome
✅ Foreign Key Tom
✅ Fk artista (pivot)
✅ Bpm (pivot)
✅ Cifras (pivot)
✅ Lyrics (pivot?)
✅ Link_versão (pivot)

Entidade tonalidade
✅ Tom

Entidade função
✅ Nome

Entidade músico
✅ Nome
✅ docId (CPF)

EscalaCuto
✅ Data (datetime)
✅ Alterar nome do atributo escalaculto para "Evento"
✅ FK Tipo
✅ Descrição

✅ TipoEvento (adicionar esta entidade)
✅ Nome
```

#### Anotações do Gabriel

```text
# Entidades

- Artista
    - Nome ✅
    - fk_música (Pivô) ✅
- Música
    - Nome ✅
    - fk_tom (Foreign Key) ✅
    - fk_artista (Pivô) ✅
    - BPM (Pivô) ✅
    - Cifra (Pivô) ✅
    - Lyrics (Pivô?) ✅
    - Link (Pivô) ✅
- Tonalidade
    - Tom ✅
- Função
    - Nome ✅
- Músico
    - Nome ✅
    - Doc. ID (CPF) ✅
- EscalaCulto (Alterar para Evento) ✅
    - Data (Datetime) ✅
    - fk_tipo (Pivô) ✅
    - Descrição ✅
- Tipo evento ✅
```

## Modelo

- Modelo antes das alterações nas Entidades

![DER](./modelo_entidade_relacionamento.drawio.svg)

- Modelo **depois** das alterações nas Entidades

  - [x] Entidades `escala_culto` alterada para `evento`
  - [x] Adição da entidade `tipo_evento`

![DER](./assets/modelo_entidade_relacionamento-MER_ver3.svg)

- Modelos com os atributos definidos

### Ver4

![DER](./assets/modelo_entidade_relacionamento-MER_ver4.drawio.svg)

### Ver5

![DER](./assets/modelo_entidade_relacionamento-MER_ver5.drawio.svg)

---

## 🔗 Convenção de Nomenclatura para Chaves Estrangeiras

### 📌 Relações 1:N → `fk_atributo`

Nas relações do tipo **um-para-muitos (1:N)**, utilizamos a convenção `fk_atributo` para indicar de forma explícita que aquele campo é uma **chave estrangeira** (foreign key).

**Exemplo:**

```sql
CREATE TABLE musicas (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    fk_tonalidade INTEGER REFERENCES tonalidades(id)
);
```

**Justificativa:**

- A tabela `musicas` pertence a uma `tonalidade`, mas não necessariamente o contrário.
- O prefixo `fk_` reforça o papel do campo como referência a outra entidade.
- Facilita leitura e entendimento em estruturas onde o relacionamento é de dependência direta.

---

### 🔁 Relações N:N (Tabelas Associativas / Pivot) → `atributo_id`

Nas tabelas que representam relacionamentos **muitos-para-muitos (N:N)**, seguimos a convenção `atributo_id`, como em `artista_id`, `musica_id`.

**Exemplo:**

```sql
CREATE TABLE artistas_musicas (
    artista_id INTEGER REFERENCES artistas(id),
    musica_id INTEGER REFERENCES musicas(id),
    PRIMARY KEY (artista_id, musica_id)
);
```

**Justificativa:**

- Esse padrão é amplamente adotado por frameworks ORM e comunidades SQL.
- Deixa claro que o campo representa o `id` da entidade referenciada.
- Evita confusões quando a mesma entidade aparece em várias relações (ex: `musica_id` em várias tabelas).
- Melhora a legibilidade em `JOINs` e consultas SQL.

---

### ✅ Resumo das boas práticas

| Tipo de relação | Convenção recomendada | Exemplo                    |
|-----------------|------------------------|----------------------------|
| 1:N             | `fk_nome_entidade`     | `fk_tonalidade`            |
| N:N (pivot)     | `nome_entidade_id`     | `artista_id`, `musica_id`  |
