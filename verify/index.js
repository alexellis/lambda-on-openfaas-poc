const request = require('request')

for(let i=0;i<100;i++) {
  var x = i;
  let r = {
    body: {"input": x.toString()},
    json: true,
    uri: "http://localhost:8080"
  };

  request.post(r, (err, res, bodyOut) => {
    if(err) {
      console.error(err);
    }

    if(bodyOut.event.input == r.body.input){
      console.log("[x]");
    } else {
      console.log(bodyOut.event.input,r.body.input);
    }

  });
}
