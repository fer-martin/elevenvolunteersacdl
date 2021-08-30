# Skill Voluntariado ACDL

Esta skill es para publicar con ACDL los cambios que se van haciendo en la skill de consola.

La idea es que cada vez que se hace un cambio en la skill por consola, bajar el skill package, decompilar a ACDL y ver de implementar esos cambios aquí, para poder aprender cómo se va programando en ACDL. También para poder probar funcionalidades en ACDL y poder volver a versiones anteriores fácilmente.

Para el deploy, no olvidarse de hacer antes

 askx compile


# Docs ACDL

https://developer.amazon.com/en-US/docs/alexa/conversations/about-acdl.html


# Bug en APLA?

Si devuelvo un parametro tipo String y se lo envio al payload del APLA dentro de un objeto
cuando lo referencio en un Speech como "${payload.xxxx.mistring}" me dice "something went wrong"
pero si lo concateno al menos con un espacio " ${payload.xxxx.mistring}" lo locuta ok.