-- CreateTable
CREATE TABLE "artistas" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "artistas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artistas_musicas" (
    "id" UUID NOT NULL,
    "artista_id" UUID NOT NULL,
    "musica_id" UUID NOT NULL,
    "bpm" INTEGER,
    "cifras" TEXT,
    "lyrics" TEXT,
    "link_versao" TEXT,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "artistas_musicas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eventos" (
    "id" UUID NOT NULL,
    "data" DATE NOT NULL,
    "fk_tipo_evento" UUID NOT NULL,
    "descricao" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eventos_musicas" (
    "id" UUID NOT NULL,
    "evento_id" UUID NOT NULL,
    "musicas_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "eventos_musicas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eventos_integrantes" (
    "id" UUID NOT NULL,
    "evento_id" UUID NOT NULL,
    "musico_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "eventos_integrantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funcoes" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "funcoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "musicas" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "fk_tonalidade" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "musicas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "musicas_funcoes" (
    "id" UUID NOT NULL,
    "musica_id" UUID NOT NULL,
    "funcao_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "musicas_funcoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "integrantes" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "doc_id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "integrantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "integrantes_funcoes" (
    "id" UUID NOT NULL,
    "musico_id" UUID NOT NULL,
    "funcao_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "integrantes_funcoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipos_eventos" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "tipos_eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tonalidades" (
    "id" UUID NOT NULL,
    "tom" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "tonalidades_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "artistas_nome_unico" ON "artistas"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "integrantes_doc_id_key" ON "integrantes"("doc_id");

-- CreateIndex
CREATE UNIQUE INDEX "integrantes_email_key" ON "integrantes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tipos_eventos_nome_unico" ON "tipos_eventos"("nome");

-- AddForeignKey
ALTER TABLE "artistas_musicas" ADD CONSTRAINT "artistas_musicas_artista_id_fkey" FOREIGN KEY ("artista_id") REFERENCES "artistas"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "artistas_musicas" ADD CONSTRAINT "artistas_musicas_musica_id_fkey" FOREIGN KEY ("musica_id") REFERENCES "musicas"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "eventos" ADD CONSTRAINT "eventos_fk_tipo_evento_fkey" FOREIGN KEY ("fk_tipo_evento") REFERENCES "tipos_eventos"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "eventos_musicas" ADD CONSTRAINT "eventos_musicas_evento_id_fkey" FOREIGN KEY ("evento_id") REFERENCES "eventos"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "eventos_musicas" ADD CONSTRAINT "eventos_musicas_musicas_id_fkey" FOREIGN KEY ("musicas_id") REFERENCES "musicas"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "eventos_integrantes" ADD CONSTRAINT "eventos_integrantes_evento_id_fkey" FOREIGN KEY ("evento_id") REFERENCES "eventos"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "eventos_integrantes" ADD CONSTRAINT "eventos_integrantes_musico_id_fkey" FOREIGN KEY ("musico_id") REFERENCES "integrantes"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "musicas" ADD CONSTRAINT "musicas_fk_tonalidade_fkey" FOREIGN KEY ("fk_tonalidade") REFERENCES "tonalidades"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "musicas_funcoes" ADD CONSTRAINT "musicas_funcoes_funcao_id_fkey" FOREIGN KEY ("funcao_id") REFERENCES "funcoes"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "musicas_funcoes" ADD CONSTRAINT "musicas_funcoes_musica_id_fkey" FOREIGN KEY ("musica_id") REFERENCES "musicas"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "integrantes_funcoes" ADD CONSTRAINT "integrantes_funcoes_funcao_id_fkey" FOREIGN KEY ("funcao_id") REFERENCES "funcoes"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "integrantes_funcoes" ADD CONSTRAINT "integrantes_funcoes_musico_id_fkey" FOREIGN KEY ("musico_id") REFERENCES "integrantes"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
