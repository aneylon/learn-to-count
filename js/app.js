// Using Module Design Pattern to namespace the app
var LearnToCount = (function(){
  return {
    currentNumber: 0,
    pickRandom: function(max, min){
      max = max || 2
      min = min || 0
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    makeNumber: function(length){
      var output = String(this.pickRandom(9,1))
      while(length > 1){
        output += this.pickRandom(9)
        length--
      }
      return output
    },
    selected: function(value){
      if ( value === '日本語')
        console.log(japanese)
      else
        console.log(value)
    },
    pickedLang: function(){
      console.log('picked')
    },
    setText: function(elementID, text){
      document.getElementById(elementID).innerHTML = text
    },
    addClassById: function(elementID, newClass){
      document.getElementById(elementID).className = newClass
    },
    getLength: function(){
      var lengthField = document.getElementById('length')
      var length = Number(lengthField.value)
      if(isNaN(length) || length < 1){
        length = 1
        lengthField.value = ''
      }

      return length
    },
    next: function(){
      this.currentNumber = this.makeNumber(this.getLength())
      this.setText('number',this.currentNumber)
    },
    check: function(event){
      if(event.which === 13) {
        var answerField = document.getElementById('answer')
        var answer = answerField.value
        answerField.value = ''
        if(answer === this.currentNumber){
          this.addClassById('checked', 'correct')
        } else {
          this.addClassById('checked', 'incorrect')
        }
        this.next()
      }
    }
  }
})()
LearnToCount.next()
