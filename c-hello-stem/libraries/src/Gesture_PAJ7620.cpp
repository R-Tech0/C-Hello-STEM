#include <Wire.h>
#include "paj7620.h"
#include <Arduino.h> 


#define GES_REACTION_TIME		500				// 可以根据实际情况调整反应时间
#define GES_ENTRY_TIME			800				// 当需要识别向前/向后手势时，手势的反应时间必须小于此值(0.8秒)
#define GES_QUIT_TIME			500			// 手势识别后的退出延迟时间


/**
 * 作用：初始化手势
**/
int Gesture_PAJ7620_Init(void){             
    int Error = 0;

    Error = paj7620Init();

    return Error;
      
} 



// 识别手势并返回中文名称
String Gesture_PAJ7620_SHIBIE(void) {
    uint8_t data = 0, data1 = 0, error;
    String gesture = "";
    
    error = paj7620ReadReg(0x43, 1, &data);	// 读取Bank_0_Reg_0x43获取手势识别结果
    if (!error) {
        switch (data) { 						// 根据不同的手势值返回相应中文名称
            case GES_RIGHT_FLAG:
                delay(GES_ENTRY_TIME);
                paj7620ReadReg(0x43, 1, &data);
                if(data == GES_FORWARD_FLAG) {
                    gesture = "向前";
                    delay(GES_QUIT_TIME);
                } else if(data == GES_BACKWARD_FLAG) {
                    gesture = "向后";
                    delay(GES_QUIT_TIME);
                } else {
                    gesture = "向右";
                }          
                break;
                
            case GES_LEFT_FLAG: 
                delay(GES_ENTRY_TIME);
                paj7620ReadReg(0x43, 1, &data);
                if(data == GES_FORWARD_FLAG) {
                    gesture = "向前";
                    delay(GES_QUIT_TIME);
                } else if(data == GES_BACKWARD_FLAG) {
                    gesture = "向后";
                    delay(GES_QUIT_TIME);
                } else {
                    gesture = "向左";
                }          
                break;
                
            case GES_UP_FLAG:
                delay(GES_ENTRY_TIME);
                paj7620ReadReg(0x43, 1, &data);
                if(data == GES_FORWARD_FLAG) {
                    gesture = "向前";
                    delay(GES_QUIT_TIME);
                } else if(data == GES_BACKWARD_FLAG) {
                    gesture = "向后";
                    delay(GES_QUIT_TIME);
                } else {
                    gesture = "向上";
                }          
                break;
                
            case GES_DOWN_FLAG:
                delay(GES_ENTRY_TIME);
                paj7620ReadReg(0x43, 1, &data);
                if(data == GES_FORWARD_FLAG) {
                    gesture = "向前";
                    delay(GES_QUIT_TIME);
                } else if(data == GES_BACKWARD_FLAG) {
                    gesture = "向后";
                    delay(GES_QUIT_TIME);
                } else {
                    gesture = "向下";
                }          
                break;
                
            case GES_FORWARD_FLAG:
                gesture = "向前";
                delay(GES_QUIT_TIME);
                break;
                
            case GES_BACKWARD_FLAG:		  
                gesture = "向后";
                delay(GES_QUIT_TIME);
                break;
                
            case GES_CLOCKWISE_FLAG:
                gesture = "顺时针";
                break;
                
            case GES_COUNT_CLOCKWISE_FLAG:
                gesture = "逆时针";
                break;  
                
            default:
                paj7620ReadReg(0x44, 1, &data1);
                if (data1 == GES_WAVE_FLAG) {
                    gesture = "挥手";
                }
                break;
        }
    }
    return gesture;
}




String Gesture_PAJ7620_SHIBIE_ENG(void) {
    uint8_t data = 0, data1 = 0, error;
    String gesture = "";
    
    error = paj7620ReadReg(0x43, 1, &data);  // 读取手势识别结果
    if (!error) {
        switch (data) {
            case GES_RIGHT_FLAG:
                delay(GES_ENTRY_TIME);
                paj7620ReadReg(0x43, 1, &data);
                if(data == GES_FORWARD_FLAG) {
                    gesture = "Forward";
                    delay(GES_QUIT_TIME);
                } else if(data == GES_BACKWARD_FLAG) {
                    gesture = "Backward";
                    delay(GES_QUIT_TIME);
                } else {
                    gesture = "Right";
                }          
                break;
                
            case GES_LEFT_FLAG: 
                delay(GES_ENTRY_TIME);
                paj7620ReadReg(0x43, 1, &data);
                if(data == GES_FORWARD_FLAG) {
                    gesture = "Forward";
                    delay(GES_QUIT_TIME);
                } else if(data == GES_BACKWARD_FLAG) {
                    gesture = "Backward";
                    delay(GES_QUIT_TIME);
                } else {
                    gesture = "Left";
                }          
                break;
                
            case GES_UP_FLAG:
                delay(GES_ENTRY_TIME);
                paj7620ReadReg(0x43, 1, &data);
                if(data == GES_FORWARD_FLAG) {
                    gesture = "Forward";
                    delay(GES_QUIT_TIME);
                } else if(data == GES_BACKWARD_FLAG) {
                    gesture = "Backward";
                    delay(GES_QUIT_TIME);
                } else {
                    gesture = "Up";
                }          
                break;
                
            case GES_DOWN_FLAG:
                delay(GES_ENTRY_TIME);
                paj7620ReadReg(0x43, 1, &data);
                if(data == GES_FORWARD_FLAG) {
                    gesture = "Forward";
                    delay(GES_QUIT_TIME);
                } else if(data == GES_BACKWARD_FLAG) {
                    gesture = "Backward";
                    delay(GES_QUIT_TIME);
                } else {
                    gesture = "Down";
                }          
                break;
                
            case GES_FORWARD_FLAG:
                gesture = "Forward";
                delay(GES_QUIT_TIME);
                break;
                
            case GES_BACKWARD_FLAG:		  
                gesture = "Backward";
                delay(GES_QUIT_TIME);
                break;
                
            case GES_CLOCKWISE_FLAG:
                gesture = "Clockwise";
                break;
                
            case GES_COUNT_CLOCKWISE_FLAG:
                gesture = "anti-clockwise";
                break;  
                
            default:
                paj7620ReadReg(0x44, 1, &data1);
                if (data1 == GES_WAVE_FLAG) {
                    gesture = "wave";
                }
                break;
        }
    }
    return gesture;
}