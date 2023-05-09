
//СТУДЕНТ

class Student {

    constructor (firstName, lastName, birthday) {
      this.firstName = firstName;
      this.lastName = lastName; 
      this.birthday = birthday;
      this.marks = [93, 75, 90, 100, 63, 48];
      this.attendance = new Array (25).fill(null);
  
    }
  
    getAge () {
      let today = new Date();
  
      let yearDelta = today.getFullYear() - this.birthday.getFullYear();
  
      if (today.getMonth() > this.birthday.getMonth() ||
          (today.getMonth() === this.birthday.getMonth() && today.getDate() >= this.birthday.getDate())) {
          return yearDelta;
        }
        return yearDelta - 1;
    }
    
    present() {
      for (let idx = 0; idx < this.attendance.length; idx++ ) {
        if(this.attendance[idx] === null){
          this.attendance[idx] = true;
          break;
        }
      }
    }
    
    absent(){
      for (let idx = 0; idx < this.attendance.length; idx++ ) {
        if(this.attendance[idx] === null){
          this.attendance[idx] = false;
          break;
        }
      }
    }
  
    averageScore(sum){
      sum = 0;
      for(let idx = 0; idx < this.marks.length; idx++) {
        sum += this.marks[idx];
      }
      let average = sum/this.marks.length;
      return average;
    }
  
    averageAttendance(){
      let inside = 0;
      let outside = 0;
      
      for (let idx = 0; idx < this.attendance.length; idx++ ) {
        if (this.attendance[idx] === true) {
          inside ++;
        } else if (this.attendance[idx] === false) {
          outside ++;
        }
      }
      return inside/this.attendance.length;
    }
  
    summary(){  
      let a = this.averageScore()
      let b = this.averageAttendance()
  
      if(a > 90 && b > 0.9){
        return "Молодець!";
      } else if(a < 90 && b < 0.9) {
        return "Редиска";
      } else if(a < 90 || b < 0.9) {
        return "Добре";
      } 
    }
    
  };
  
  let chris = new Student ("Chris", "Brown", new Date(1987, 6, 1))
  
  console.log(chris.birthday);
  console.log(chris.getAge());
  chris.present();
  chris.absent();
  chris.present();
  chris.absent();
  chris.present();
  chris.absent();
  chris.absent();
  chris.present();
  chris.present();
  chris.absent();
  chris.present();
  chris.present();
  chris.present();
  chris.present();
  chris.present();
  chris.absent();
  chris.present();
  chris.present();
  chris.absent();
  chris.present();
  chris.present();
  chris.present();
  chris.present();
  chris.present();
  chris.present();
  console.log(chris.attendance);
  console.log(chris.averageScore());
  console.log(chris.averageAttendance());
  console.log(chris.summary());