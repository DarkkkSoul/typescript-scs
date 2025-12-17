function greet(name: string): string {
  return `Good morning, ${name}`;
}
console.log(greet("mahesh"));

let apiResponseStatus: "done" | "pending" | "error" = "done";
apiResponseStatus = "done";

let hello;

// type narrowing
function msg(msg: string | number) {
  if (typeof msg === "string") return "hello";
  else return "enter valid message";
}
msg("hi");

// type guard
type response{
    status:boolean,
    data: string
}
function isResponseValid(response:any):response is response{
    return(
        typeof response.status === 'boolean' &&
        typeof response.data === 'string'
    )
}
function getResponse(response:response):string{
if(isResponseValid(response)) return 'valid'
return "not valid"
}