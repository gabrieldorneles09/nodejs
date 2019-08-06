// Compiled using marko@4.18.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projeto_1$1.0.0/app/views/jogadores/form/form.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Aplicação 1</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Formulário de Jogador</h1><form action=\"/inicio\" method=\"POST\"><div><label for=\"name\">Nome:</label> <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Digite seu nome aqui\"></div><div><label for=\"email\">Email:</label> <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Digite seu email aqui\"></div><div><input type=\"submit\" value=\"Salvar\"></div></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "14");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projeto_1$1.0.0/app/views/jogadores/form/form.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
