// Compiled using marko@4.18.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projeto_1$1.0.0/src/app/views/jogadores/form/form.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Aplicação 1</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Formulário de Jogador</h1><form action=\"/jogadores\" method=\"POST\">");

  if (data.jogadores.id) {
    out.w("<input type=\"hidden\" name=\"_method\" value=\"PUT\">");
  }

  out.w("<div><label for=\"id\">ID:</label> <input type=\"number\" id=\"id\" name=\"id\"" +
    marko_attr("value", "" + data.jogadores.id) +
    " placeholder=\"Digite um id aqui\"></div><div><label for=\"name\">Nome:</label> <input type=\"text\" id=\"name\" name=\"name\"" +
    marko_attr("value", "" + data.jogadores.nome) +
    " placeholder=\"Digite seu nome aqui\"></div><div><label for=\"email\">Email:</label> <input type=\"email\" id=\"email\" name=\"email\"" +
    marko_attr("value", "" + data.jogadores.email) +
    " placeholder=\"Digite seu email aqui\"></div><div><input type=\"submit\" value=\"Salvar\"></div></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "18");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projeto_1$1.0.0/src/app/views/jogadores/form/form.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
