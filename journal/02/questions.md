# Intro to JavaScript
01. Which keywords are used to declare a variable in JavaScript?

    > | var, const and let |

02. What is the definition of a function?

    > | A function is a block of code written to perform a particular task. The function must be called in order to run. |

03. What are the `SOLID` principles?

    > | Single Responsibility Principle, Open Closed Design Principle, Liskov Substitution Principle, Interface Segregation Principle, and Dependency Injection or Inversion principle |

04. Given this array: How could you remove the `pineapple`?

    ```js
    let fruit = ['apple', 'banana', 'pineapple', 'orange', 'strawberry']
    ```

    > | fruit[2] = 0 |

05. Given these two objects: How could you add each to the others friends arrays?

    ```js
    let you = {
        name: "You",
        hair: true,
        friends: []
    }
    let them = {
        name: "Them",
        hair: false,
        friends: []
    }
    ```

    > | them.friends.push(you)
        you.friends.push(them) |

06. Give an example of a JavaScript `Conditional`:

    > | let example = 50
            if (example >= 25){
                return true
            } else {
                return false
                }|

07. What is the main difference between `parameters` and `arguments`?

    > | Parameters are the placeholders within the function. Arguments are the actual values put into the function to run it. |

08. Instead of writing everything to the console, what is a better way to debug your code?

    > | Using a debugger such as dev tools |

09. What is the difference between a `primitive` value and a `reference` value?

    > | A primitive value is like a statement. It is what you say it is. A reference value is referencing data stored in the memory in say an array. You can change the the reference value and it'll write over the previous memory value. |

10. Demonstrate a loop that prints the numbers between -100 and 100?

    > | for (let i=-100, i<=100, i++){
        console.log(i)
    } |
