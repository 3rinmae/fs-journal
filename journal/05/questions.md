# Intro to Server side concerns with JavaScript
01. What do the letters of the acronym `CRUD` stand for?

  > | Create, Read, Update, and Destroy. |

02. Each action that `CRUD` represents maps to an HTTP request. What HTTP request does each `CRUD` action correspond to?

  > | Create = Post, Read = Get, Update = Put, Destroy = Delete |

03. What does `ORM` stand for? Which `ORM` do we use when interacting with MongoDB

  > | ORM stands for Object Relationship Mapper. We use Mongoose translates and interacts with MongoDB for us. | 

04. Which two `HTTP` request types include a body?

  > | The two HTTP requests that include a body are post and put. |

05. In a/an _______ coding model, when you call a function, it returns only when the action has finished and stops your program for the time the action takes. Likewise in a/an _______ coding model, multiple things are allowed to happen at one time. When you perform an action, your program continues to run.  Fill in the blanks.

  > | Synchronous, Asynchronous |

06. What are the three types of data relationships? Provide an example of each.

  > | One-to-one relationship describes a relationship between two entities that are only tied to each other. For example Erin and phone number. I only have one phone number and that one phone number is only tied to me. One-to-many is when one side can have more than one relationship while the reverse relationship can only be single sided. An example of this is Erin and my address. I only have one home address, but the home address has relationship with the other members of my family that live there. Many-to-many is a relationship between two entities where they both might have relationships between each other. An example of this is stores and the products they sell. A store will sell many products and the individual product may be available at many different stores. |

07. What is middleware?

  > | Middleware are functions that receive instructions from the request then run some sort of authorization, check, or other functionality before it goes to the controller. Body parser and use are a couple examples. |

08. The ______ pipeline delivers information from the client while the ______ pipeline returns it. Fill in the blanks. 

  > | Request, Response |

09. Demonstrate the pattern that is used to include a request query with the client's `HTTP` request providing the property `tag` and the value `winter`.

  > | http://localhost:3000/test?tag=winter |

10. What is a ***virtual property***?

  > | A virtual property is an additional field for a given model. They are additional model functions returning values based on the default schema fields. It links information stored in a different part of the database instead of storing the same information in multiple places. |
