// C++ code
//
#include <Adafruit_LiquidCrystal.h>

int seconds =0;

Adafruit_LiquidCrystal lcd_l(0);
  
void setup()
{
  lcd_l.begin(16, 2);
  
  lcd_l.print("Ola Mundo!!");
}

void loop()
{
  lcd_l.setCursor(0, 1);
  lcd_l.print(seconds);
  lcd_l.setBacklight(1);
  delay(1000);//1000 mili = 1seg
  seconds += 1;
}