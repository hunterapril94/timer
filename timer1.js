const arguments = process.argv.slice(2)
for(const arg of arguments) {

  if(arg >= 0){
    setTimeout(() => {
    process.stdout.write('\x07');
  }, 1000*arg)
}
}

