# Single Page Applications with Vue
01. What is the entrypoint of an application?

  > | Main.js is the entrypoint of an application. |

02. What is the difference between a vue `component` and `page`?

  > | A component is the html, js, and css for a specific part of the page. The page can/will contain multiple components. |

03. What is ***Component-Based Architecture***?

  > | Its a way of building a page with components that are independent from one another. You can duplicate a component in multiple places or you can have many different types of components that don't interact or rely on each other at all. |

04. What are the three tags that make up a Vue component?

  > | The three tags that make up a Vue component are template (html), script (javascript), and style (css). |

05. What are ***lifecycle hooks***? What are lifecycle hooks used for?

  > | Lifecycle hooks are stages in the lifecycle of a component where we can add code to do things. OnMount sets up a callback to be called after the component is mounted. OnUnmount sets up a callback to be called when leaving the component so it doesn't continue the data to the new component. |

06. Which component in Vue does the vue-router use to mount pages onto?

  > | The loadPage component. App.vue? Please explain to class. |

07. What is the difference between the `AppState` and the state object within a component?

  > | The AppState data can be accessed from other pages where the state object within a component can only be accessed locally. |

08. What is the responsibility of `Services` in our Vue projects?

  > | The service level is responsible for manipulating the data same as it did in MVC. |

09. What are ***props*** and how are they used? Provide an example

  > | Props pass data from the parent page to the child component. An example would be when the parent car page in Gregslist passed the carProp data to the CarCardComponent. |

10. What is the Vue method used to create watchable objects such as `state` or `AppState`?

  > | The Vue method used to create watchable objects is reactive. Please explain in class. |
