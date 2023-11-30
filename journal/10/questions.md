# CSharp and SQL Fundamentals
01. What is the purpose of a `namespace`?

  > | Namespace helps to organize the code within larger groups. |

02. What is the difference between a `class` and an `interface`?

  > | A class allows you to create functionality that subclasses can implement or override. An interface only allows you to define functionality, not implement it. |

03. What is the method that returns an instance of a class, yet it has no return type?

  > | The constructor returns an instance of a class but doesn't have a return type. |

05. In the Car example what is the access modifier of the `Start()` method?

  ```c#
  abstract class Car
  {
    public string Start()
    {

      return "Vroooom";

    }
  }
  ```

  > | Public is the access modifier |

06. In the Car example what is `string` an indication of?

  > | String indicates the return value will be a string. |

07. In the Car example what is `abstract` preventing?

  > | Abstract is preventing the class from instantiating an object on its own. Its more like a blueprint for other classes. |

08. In a SQL table, what is the difference between information in a row and information in a column?

  > | In a SQL table, the information in a row will be specific to that data object across many properties. The column will specify the specific property information for many rows of data objects. |

09. Demonstrate the necessary SQL for creating a table called `characters` with the values `name, age, description` as strings, and an `int` id.

  > | CREATE TABLE characters (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    age VARCHAR(255),
    description VARCHAR(1000)
  ); |

10. In SQL how can you query more than a single table? Provide an example.

  > | In SQL you would use JOIN to query more than a single table. In the following example from PostIt today, join is used to query the accounts for an account id that matches the collaborators account id. 
  
  internal List<ProfileCollaboration> GetCollaboratorsByAlbumId(int albumId)
  {
    string sql = @"
    SELECT 
    collab.*,
    acc.*
    FROM collaborators collab 
    JOIN accounts acc ON acc.id = collab.accountId
    WHERE collab.albumId = @albumId;";

    List<ProfileCollaboration> collaborators = _db.Query<Collaborator, ProfileCollaboration, ProfileCollaboration>
    (sql, (collaborator, profileCollab) =>
    {
      profileCollab.CollaborationId = collaborator.Id;
      profileCollab.AlbumId = collaborator.AlbumId;
      return profileCollab;
    },
     new { albumId }).ToList();
    return collaborators;
  } |
