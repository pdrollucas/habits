const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)

const data = { 
    run: ['01-01', '01-02', '01-06'],
  }
  
  nlwSetup.setData(data)
  nlwSetup.load ()