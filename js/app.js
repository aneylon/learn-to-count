// Using Module Design Pattern to namespace the app
var LearnToCount = (function(){
  return {
    currentNumber: 0,
    currentNumberText: '',
    currentLang: '',
    selected: function(value){
      if(value)
      if(value = 'korean')
        currentLang = korean
      if(value = 'japanese')
        currentLang = japanese
      if(value = 'chinese')
        currentLang = chinese

      this.nextNumber();
    },
    pickRandom: function(max, min){
      max = max || 2
      min = min || 0
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    makeNumber: function(length){
      length = this.pickRandom(length,1)
      var min = 1
      if(length === 1) min = 0
      var output = String(this.pickRandom(9,min))
      while(length > 1){
        output += this.pickRandom(9)
        length--
      }
      return output
    },
    setText: function(elementID, text){
      document.getElementById(elementID).innerHTML = text
    },
    showPronounciation: function(){
      var showCheck = document.getElementById('showPronounciation').checked
      if(showCheck){
        this.addClassById('pronunciation', 'visible')
      } else {
        this.addClassById('pronunciation', 'invisible')
      }
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
      if (length > 16) {
        length = 16
        lengthField.value = 16
      }
      return length
    },
    nextNumber: function(){
      this.currentNumber = this.makeNumber(this.getLength())
      this.currentNumberText = this.numberToText(this.currentNumber)
      this.setText('number',this.currentNumberText)
    },
    numberToText: function(curNum){
      curNum = Number(curNum)
      var txtNum = ''
      var parts = []
      if(curNum === 0){
        parts.push(curNum)
      }
      while(curNum > 0){
        parts.push(curNum % 10000)
        curNum = Math.floor(curNum / 10000)
      }
      return parts.reverse()
      return txtNum
    },
    checkNumber: function(event){
      if(event.which === 13) {
        var answerField = document.getElementById('answer')
        var answer = answerField.value
        answerField.value = ''
        if(answer === this.currentNumber){
          this.addClassById('checked', 'correct')
          document.getElementById('checked').innerHTML = 'Correct'
        } else {
          this.addClassById('checked', 'incorrect')
          document.getElementById('checked').innerHTML = 'Incorrect'
        }
        this.nextNumber()
      }
    }
  }
})()
