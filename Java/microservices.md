# Microservices-in-Java

    My assignment

● Build a microservice that manages flows and steps using RESTful APIs.

    ○ It’s enough to implement EchoStep, ChoiceStep, GotoStep and EndStep
    ○ Use spring boot (https://spring.io/projects/spring-boot/)

● Build a flow builder ui that interacts with the APIs of the microservice that users can drag
and drop steps of different types to build a specific flow - Vote and Q&A flows.

    ○ Use react flow (https://reactflow.dev/)

# LESSONS

1.  Polymorphism:
    Polymorphism is a fundamental concept in object-oriented programming that allows objects of different types to be treated as objects of a common type.

    Is achieved through method overriding and interfaces 2.

    reference to a base type can refer to objects of its derived types.

2.  Interface (Step):
    An interface in Java is a collection of abstract methods (methods without a body) that define a contract for classes that implement the interface. In this case, the Step interface serves as a blueprint for different types of steps in your flow. It declares a single method called execute().

3.  Interface and Implementation in the Service:
    The FlowService interface declares a method (executeStep()) that takes a Step as a parameter. The implementation of this interface (FlowServiceImpl) takes advantage of polymorphism. Since all step types implement the Step interface, you can pass any type of step to the executeStep() method.

## @RequestMapping, @Autowired, and the purpose of services and controllers in a Spring Boot application.

Controllers:
Controllers in Spring handle incoming HTTP requests, process them, and return an appropriate response. They are responsible for handling the flow of control, interacting with the user, and invoking appropriate services to perform business logic. Controllers are typically annotated with @Controller or @RequestMapping:

@RequestMapping is an annotation in Spring that is used to map web requests to specific methods or controllers. It is often applied at the method level within a controller class. By using @RequestMapping, you define the URL path at which a particular method or controller will handle incoming HTTP requests.

e.g

```
@RestController
@RequestMapping("/example")
public class ExampleController {

    @RequestMapping("/endpoint")
    public String handleRequest() {
        // Method logic here
        return "Response";
    }
}
```

In this example, the handleRequest() method will handle requests at the path "/example/endpoint".

Services:
Services in Spring encapsulate business logic and application-specific functionality. They are designed to perform specific tasks, often interacting with databases, external services, or other components. Services are often annotated with @Service.
@Service
public class FlowServiceImpl implements FlowService {
// Business logic methods
}

Uses of Services:

Separation of Concerns: The use of services and controllers follows the principle of separation of concerns. Controllers handle HTTP requests and delegate the actual business logic to services.
Reusability: Services encapsulate reusable business logic that can be used by multiple controllers or other services.
Testability: By separating concerns, it becomes easier to unit test services independently of controllers. This helps in writing modular and testable code.

The FlowController handles HTTP requests related to flow steps, while the FlowServiceImpl encapsulates the logic for executing different types of steps. This separation makes the code more modular and maintainable.

## Spring annotations

@Service annotation in Spring is used to indicate that a class is a service.

Used to define a service bean that should be automatically discovered and registered by the Spring container during component scanning.

The @Service annotation is a specialization of the @Component annotation, and it is typically used to annotate service classes.

## Spring Framework classes

> ResponseEntity<String> : represents the entire HTTP response, including the status code, headers, and body, for a given request.

```
{ // in a method
    HttpHeaders headers = new HttpHeaders();
        headers.add("Custom-Header", "SomeValue");

        // Creating a ResponseEntity with a custom status code, headers, and the response body (message)
        return new ResponseEntity<>(message, headers, HttpStatus.OK);
}
```

- Dependency Injection:
  In software development, dependency injection is a design pattern where the components of a system receive their dependencies from an external entity rather than creating them internally.
- Why Dependency Injection:
  Promotes loose coupling between components.
  Enhances testability and maintainability.
  Supports the principle of inversion of control (IoC), where control flow is inverted compared to traditional programming.

# START PROJECT (based on chatGPT):

> start spring boot project
> Create Models for each steps
> use common interface step

```
// Step.java
public interface Step {
    String execute();
}
```

## EchoStep

```
// EchoStep.java
public class EchoStep implements Step {
    private String message = "Hello. Welcome to this _microservice_. Choose A or B";

@Override
public String execute() {
    return message;
}
}
```

## ChoiceStep

```
// ChoiceStep.java
public class ChoiceStep implements Step {
    private String a;
    private String b;

@Override
public String execute(){
    return a>b?a :b;
}
}
```

## GotoStep

```
// GotoStep.java
public class GotoStep implements Step {
    private String x;

@Override
public String execute(){
    return x;
}
}
```

## EndStep

```
// Step.java
public class EngStep implements Step {
    private String bye = "Okey Have a good day";

@Override
public String execute(){
    return bye;
}
}
```

## Create Service

Create a service that handles the execution of steps.

```
// VoteFlow.java
public interface VoteFlow {
    String executeStep(Step step);
}
```

```
@Service
public class VoteFlowImpl implements VoteFlow{
    @Override
    public String executeStep(Step step){
        return step.execute();
    }
}
```

## Implement Controllers, RESTful API requests

```
//VoteFlowController.java
@RestController
@RequestMapping("/flow")
public class FlowController {
    private final VoteFlow flowService;

    @Autowired
    public FlowController(VoteFlow flowService) {
        this.flowService = flowService;
    }
// post mapping for steps
}
```

> > Now create a PostMapping for each step.

### Endpoint /Echo

```
@PostMapping("/echo")
public ResponseEntitiy<String> executeEchoStep(@RequestBody EchoStep echoStep){
    String result = flowService.executeStep(echoStep);
    return ResponseEntity.ok(result);
}
```

### Endpoint /Choice

```
    @PostMapping("/choice")
    public ResponseEntity<String> executeChoiceStep(@RequestBody ChoiceStep choiceStep) {
        String result = flowService.executeStep(choiceStep);
        return ResponseEntity.ok(result);
    }

```

### Endpoint /Goto

```
    @PostMapping("/goto")
    public ResponseEntity<String> executeGotoStep(@RequestBody GotoStep gotoStep) {
        String result = flowService.executeStep(gotoStep);
        return ResponseEntity.ok(result);
    }
```

### Endpoint /End

```
    @PostMapping("/echo")
    public ResponseEntity<String> executeEndStep(@RequestBody EndStep endStep) {
        String result = flowService.executeStep(endStep);
        return ResponseEntity.ok(result);
    }

```

## Run the Application:

Run your Spring Boot application, and the RESTful APIs should be accessible at the specified endpoints (/flow/echo, /flow/choice, /flow/goto, /flow/end). You can use tools like Postman to test these endpoints.
