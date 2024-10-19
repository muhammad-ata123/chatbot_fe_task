const JsonTable = [
    {
      "type": "table",
      "columns": ["Product", "Category", "Price", "Stock", "Rating", "Supplier"],
      "rows": [
        ["Laptop", "Electronics", "$999", "Available", "4.5", "Tech Supply Co."],
        ["Phone", "Electronics", "$699", "Out of Stock", "4.7", "Smart Gadgets Inc."],
        ["Shoes", "Apparel", "$50", "Available", "4.2", "Footwear Hub"]
      ]
    },
    {
      "type": "table",
      "columns": ["Service", "Latency (ms)", "Deployment Time"],
      "rows": [
        ["OrdersLookupService", 200, "13:45"],
        ["PaymentsService", 150, "14:00"],
        ["UserProfileService", 120, "14:15"]
      ]
    },
    {
      "type": "table",
      "columns": ["Employee", "Department", "Salary", "Experience"],
      "rows": [
        ["Alice", "Engineering", "$90,000", "5 years"],
        ["Bob", "Marketing", "$70,000", "3 years"],
        ["Charlie", "Design", "$80,000", "4 years"]
      ]
    }
  ];
  
  const JsonGraph = [
    {
      "type": "bar",
      "labels": ["January", "February", "March"],
      "datasets": [
        {
          "label": "Sales",
          "data": [300, 500, null],
          "backgroundColor": ["rgba(75, 192, 192, 0.2)"],
          "borderColor": ["rgba(75, 192, 192, 1)"],
          "borderWidth": 1
        }
      ]
    },
    {
      "type": "line",
      "labels": ["Q1", "Q2", "Q3", "Q4"],
      "datasets": [
        {
          "label": "Revenue",
          "data": [1500, 2000, 2500, 3000],
          "backgroundColor": ["rgba(255, 99, 132, 0.2)"],
          "borderColor": ["rgba(255, 99, 132, 1)"],
          "borderWidth": 2
        }
      ]
    },
    {
      "type": "pie",
      "labels": ["Red", "Blue", "Yellow"],
      "datasets": [
        {
          "label": "Colors",
          "data": [300, 50, 100],
          "backgroundColor": [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)"
          ],
          "borderColor": [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)"
          ],
          "borderWidth": 1
        }
      ]
    }
  ];

const JsonCode = [
    {
      "language": "JavaScript",
      "code": "function helloWorld() {\n  console.log('Hello, World!');\n}",
      "description": "This function prints 'Hello, World!' to the console."
    },
    {
      "language": "Python",
      "code": "def greet():\n    print('Hello, World!')",
      "description": "This function prints 'Hello, World!' in Python."
    },
    {
      "language": "Java",
      "code": "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println('Hello, World!');\n    }\n}",
      "description": "This is a Java program that prints 'Hello, World!'."
    },
    {
      "language": "C++",
      "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << 'Hello, World!';\n    return 0;\n}",
      "description": "This is a simple C++ program that prints 'Hello, World!'."
    },
    {
      "language": "Ruby",
      "code": "class Greeter\n  def greet(name)\n    puts \"Hello, \#{name}!\"\n  end\nend\n\ngreeter = Greeter.new\ngreeter.greet('World')",
      "description": "This Ruby class defines a method to greet a person by name."
    },
    {
      "language": "Go",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, World!\")\n}\n",
      "description": "This is a Go program that prints 'Hello, World!'."
    },
    {
      "language": "C#",
      "code": "using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"Hello, World!\");\n    }\n}",
      "description": "This C# program prints 'Hello, World!' to the console."
    }
  ];

  const JsonTextResponses = [
    
    {
      "responses": {
        "text": "Our application offers a wide range of functionalities designed to meet the needs of diverse users. From managing tasks to tracking progress, each feature has been developed with user feedback in mind to ensure an intuitive and efficient experience."
      }
    }
  ];
  
  
  
  export { JsonTable, JsonGraph, JsonCode ,JsonTextResponses };
  