// Using Module Design Pattern to namespace the app
var LearnToCount = (function(){
  return {
    currentNumber: 0,
    currentNumberText: '', // [textInSelectedLang, pronounciation]
    currentLang: '',
    selected: function(value){
      if(value === ''){
        this.currentLang = ''
        return
      }
      if(value == 'koreanHangul')
        this.currentLang = koreanHangul
      if(value == 'koreanHanja')
        this.currentLang = koreanHanja
      if(value == 'koreanNative')
        this.currentLang = koreanNative
      if(value == 'japaneseKanji')
        this.currentLang = japaneseKanji
      if(value == 'japaneseHiragana')
        this.currentLang = japaneseHiragana
      if(value == 'chinesePinyin')
        this.currentLang = chinesePinyin
      if(value == 'chineseBopomofo')
        this.currentLang = chineseBopomofo

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
      var prevNumber = this.currentNumber
      while(prevNumber === this.currentNumber){
        this.currentNumber = this.makeNumber(this.getLength())
      }
      this.currentNumberText = this.numberToText(this.currentNumber)
      this.setText('number',this.currentNumberText[0])
      this.setText('pronunciation',this.currentNumberText[1])
    },
    numberToText: function(curNum){
      curNum = Number(curNum)
      //utility to normalize number chunks
      var padZeros = function(startStr){
        var output = ''
        var diff = 4 - startStr.length
        while(diff > 0) {
          output += '0'
          diff --
        }
        return output + startStr
      }
      var txtNum = ''
      var pronounce = ''
      var parts = []
      if(curNum === 0){
        parts.push(curNum)
        txtNum = this.currentLang.zero[0]
        pronounce = this.currentLang.zero[1]
      }
      while(curNum > 0){
        parts.push(curNum % 10000)
        curNum = Math.floor(curNum / 10000)
      }
      if(parts[3]){
        var stringed = padZeros(parts[3].toString())
        var composed = this.composeStrings(stringed, 3)
        txtNum += composed.txt
        pronounce += composed.pro
      }
      if(parts[2]){
        var stringed = padZeros(parts[2].toString())
        var composed = this.composeStrings(stringed, 2)
        txtNum += composed.txt
        pronounce += composed.pro
      }
      if(parts[1]){
        var stringed = padZeros(parts[1].toString())
        var composed = this.composeStrings(stringed, 1)
        txtNum += composed.txt
        pronounce += composed.pro
      }
      if(parts[0]){
        var stringed = padZeros(parts[0].toString())
        var composed = this.composeStrings(stringed, 0)
        txtNum += composed.txt
        pronounce += composed.pro
      }
      return [txtNum, pronounce]
    },
    composeStrings: function(numberStr, place){
      var txt = '', pro = ''

      txt += this.currentLang.thousand[Number(numberStr[0])][0]
      txt += this.currentLang.hundred[Number(numberStr[1])][0]
      txt += this.currentLang.ten[Number(numberStr[2])][0]
      txt += this.currentLang.one[Number(numberStr[3])][0]
      txt += this.currentLang.suffix[place][0]

      pro += this.currentLang.thousand[Number(numberStr[0])][1]
      pro += this.currentLang.hundred[Number(numberStr[1])][1]
      pro += this.currentLang.ten[Number(numberStr[2])][1]
      pro += this.currentLang.one[Number(numberStr[3])][1]
      pro += this.currentLang.suffix[place][1]

      return {
        txt: txt,
        pro: pro
      }
    },
    checkNumber: function(event){
      if(event.which === 13) {
        var answerField = document.getElementById('answer')
        var answer = answerField.value
        answerField.value = ''
        if(this.currentLang === ''){
          return
        }
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
