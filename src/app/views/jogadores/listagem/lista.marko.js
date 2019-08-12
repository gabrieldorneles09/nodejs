// Compiled using marko@4.18.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projeto_1$1.0.0/src/app/views/jogadores/listagem/lista.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"pt-br\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>Lista de Jogadores</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Lista de Jogadores</h1><table id=\"tabelaJogador\" border=1><thead><tr><th>Nome</th><th>Email</th><th>Editar</th><th>Excluir</th></tr></thead><tbody>");

  marko_forEach(data.jogadores, function(jogador) {
    out.w(" ");

    var $keyValue$0 = "@" + jogador.id,
        $keyScope$0 = "[" + ($keyValue$0 + "]");

    out.w("<tr" +
      marko_attr("id", "jogador_" + jogador.id) +
      "><td>" +
      marko_escapeXml(jogador.nome) +
      "</td><td>" +
      marko_escapeXml(jogador.email) +
      "</td><td><a" +
      marko_attr("href", "/jogadores/form/" + jogador.id) +
      ">Editar</a></td><td><a href=\"#\"" +
      marko_attr("data-ref", "" + jogador.id) +
      " data-type=\"remocao\">Excluir</a></td></tr>");
  });

  out.w("</tbody></table><script src=\"/estatico/js/remove-jogador.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "23");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projeto_1$1.0.0/src/app/views/jogadores/listagem/lista.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
