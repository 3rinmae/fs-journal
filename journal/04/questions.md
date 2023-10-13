# Understanding Asynchronous Code, and API's
01. What is the difference between `asynchronous` code and `synchronous` code?

  > | Synchronous code goes line by line from top to bottom. Asynchronous code jumps over lines of code while awaiting information. This helps other items of code load while waiting for data. |

02. What is an event listener?

  > | An event listener listens for changes to saved data in the AppState. |

03. What does *REST* stand for, and in simple terms what does it mean??

  > | REST stands for REpresentational State Transfer. It means a representation of the state of the data will be transferred to you upon request from the server. |

04. What is a callback / higher order function?

  > | A callback is code that should run after a function is complete but it's stored inside the function so it can process while the time consuming part of the code is still working. IE a download. |

05. What is a `promise`? How do you capture an error from a `promise`?

  > | A promise in Javascript is an object that will be resolved or rejected by a certain time. The error in the promise is captured in the catch of a try/catch function for example. |

06. Name three processes used to make requests over `HTTP`?

  > | Get, delete, and put are all processes used to make requests over HTTP. |

07. What does the `API` acronym stand for?

  > | API stands for Application Programming Interface. |

08. What must you do in order to `await` a promise inside of a function?

  > | In order to await a promise you need to async the start of the function. |

09. What is the purpose of encapsulation in programming?

  > | The purpose of encapsulation is to hide sensitive data or code from either malicious or incompetent users. |

10. What is `HTTP` response code for a successful request?

  > | The 200 response code means ok or successful. |

11. What is a 400 error?

  > | The 400 error means it was a bad request. The server cannot or will not process the request because of bad information provided to it. |
