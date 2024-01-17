# Hey

## to change port in resources/application.yml
server:
  port: 3000
## to stop application
spring:
  main: 
     web-application-type: none

## my first API
to create class in java
public String greet() {
    return "Hello greet"
}
To expose this method as a rest endpoint (get request client) -
@GetMapping("/")
then  greet()  function below...
and add @RestController above Main 
if u say, @GetMapping("/greet")
your url becomes localhost:8080/greet

## Annotations
@SpringBootApplication
is a wrapper for 
- @Configuration: database connection details
- @EnableAutoConfiguration: guesses the confg ased on JAR files available on  hte classpath, knws what librries u use, and pre-configures their componts
- @ComponentScan: telling spring where to look for components
its important to put componnents in the same package

## creating aliasses for annotations
@AliasFor(
    annotation = Configuration.class
    or
    annotation = ComponentScan.class // or 
)
### without springBootapp notation
@ComponentScan(basePackages  = 'com.firstspringboot')
@Enable. ..  

# Spring MVC
abstracts process of handling HTTP requests/responses
## annotations
@Controller - auto-detects implementation classes/beans by scanning the classpath
@RestController 
- contails @Controller and @ResponseBody 
- indicates the class is  a controller & that all the methods will return a JSON response
@requestMapping(method=RequestMethod.GET, value='/path')  is the same as @GetMapping(value='/path')
@PostMapping(value='path')
@DeleteMapping(value='path')
@RequestParamMapping(value=name, defaultValue="world")

## to return JSON apis / objects
use 
public GreetResponse greet(){
    return new GreetResponse("hello")
}
record GreetResponse(String greet){}
## record 
-  is a feature introduced in Java 16 for a more concise way to declare classes that are mainly used to store data.
## without record
constructor
class MyClass{
   //varuable
    private final String greet;

    //construc
    public MyClass(String greet){
        this.greet = greet
    }
    // getter
    public String getMyClass(){
        return greet;
    }
     // to String (JSON format)
     @override
     public String toString(){
        return "GreetResponse{" +"gret='" + greet ... .}
     }
    / / equals and hash code
    use shortcut generate
}
## ////////JACKSON complicated json
@GetMapping("/greet")
public GreetResponse greet(){
    return new GreetResponse(
        greet: "Hello",
        List.of("Java", "Golang", "JavaScript"),
        new Person(name: "Alex", age: 28, savings: 30_000.0)
    )
}

record Person(String name, int age, double savings){

}
record GreetResponse (
    String greet,
    List<String> favProgrammingLanguages
    Person person
)

## Putting all together, MODEL, CRUD with API
new class after Main
pub class Customer{
    private Integer id;
    private String name;
    private String email;
    private Integer age; 
    
    > alt + enter for constructors
    create
     public Customer() {}
    > generate setters and getters
    > generate equals, hashcode and tostring()
}
## DataBase Connection with out SQL code
root file
+ docker-compose.yml
check 
>> run
commands
>> docker compose ps
>> docker logspostgres

>> 
>>

>> 
>>

## 

>> 
>>

>> 
>>

## 

>> 
>>

>> 
>>

## 

>> 
>>

>> 
>>


## 

>> 
>>

>> 
>>

## 

>> 
>>

>> 
>>

## 
## 

## 
## 
## 
## 

## 
## 
## 
