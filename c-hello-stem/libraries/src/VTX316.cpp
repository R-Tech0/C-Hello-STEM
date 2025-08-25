#include <Arduino.h>
#include <SoftwareSerial.h>

SoftwareSerial voiceSerial(2, 3);


void VTX316_Init()
{
  voiceSerial.begin(115200);

}

/*********************************
 * 函数名：Voice_BOBAO
 * 作用：串口发送播报内容
 * 传参：播报内容文本，字符串
 * 返回值：无
*********************************/
void Voice_BOBAO(const char *message) 
{
  size_t byteLength = strlen(message);
  
  // 构建帧头
  uint8_t headOfFrame[5] = {
    0xFD,               
    0x00,               
    (uint8_t)(byteLength + 2), 
    0x01,
    0x05
  };

  // 发送帧头
  voiceSerial.write(headOfFrame, sizeof(headOfFrame));
  delay(2);
  
  voiceSerial.print(message);  // 使用print发送字符串
  
  
  delay(byteLength * 12 + 300);
}

/*********************************
 * 函数名：Voice_YIN_LIANG
 * 作用：播报音量设置
 * 传参：设置音量0-10
 * 返回值：无
*********************************/
void Voice_YIN_LIANG(uint8_t YINLIANG)
{

  uint8_t command[9] = {0xFD, 0x00, 0x06, 0x01, 0x01, 0x5B, 0x76, 0x30 + YINLIANG, 0x5D};
  voiceSerial.write(command, sizeof(command));
}


/*********************************
 * 函数名：Voice_ZANTING
 * 作用：暂停播报
 * 传参：无
 * 返回值：无
*********************************/
void Voice_ZANTING()
{

  uint8_t command[4] = 
  {
     0xFD, 0x00, 0x01, 0x03 
  };
  voiceSerial.write(command, sizeof(command));
}

/*********************************
 * 函数名：Voice_HUIFU
 * 作用：恢复播报
 * 传参：无
 * 返回值：无
*********************************/
void Voice_HUIFU()
{

  uint8_t command[4] = 
  {
     0xFD, 0x00, 0x01, 0x04  
  };
  voiceSerial.write(command, sizeof(command));
}

/*********************************
 * 函数名：Voice_FAYANREN
 * 作用：发言人选择
 * 传参：FAYANREN（uint8_t类型0-7）
 *       0-晓玲, 1-尹小监, 2-易小强, 
 *       3-田蓓蓓, 4-唐老鸭, 5-小燕子,
 *       6-贝童, 7-晓可
 * 返回值：无
​**​*​**​*​**​*​**​*​**​*​**​*​**​*​**​*​**​*​**​*​**​*/
void Voice_FAYANREN(uint8_t FAYANREN)
{
  uint8_t command[10];  // 最大指令长度
  
  switch(FAYANREN) {
    case 0: // 晓玲
      command[0] = 0xFD; command[1] = 0x00; command[2] = 0x06;
      command[3] = 0x01; command[4] = 0x01; command[5] = 0x5B;
      command[6] = 0x6D; command[7] = 0x33; command[8] = 0x5D;
      voiceSerial.write(command, 9);
      break;
    
    case 1: // 尹小监
      command[0] = 0xFD; command[1] = 0x00; command[2] = 0x07;
      command[3] = 0x01; command[4] = 0x01; command[5] = 0x5B;
      command[6] = 0x6D; command[7] = 0x35; command[8] = 0x31; 
      command[9] = 0x5D;
      voiceSerial.write(command, 10);
      break;
    
    case 2: // 易小强
      command[0] = 0xFD; command[1] = 0x00; command[2] = 0x07;
      command[3] = 0x01; command[4] = 0x01; command[5] = 0x5B;
      command[6] = 0x6D; command[7] = 0x35; command[8] = 0x32; 
      command[9] = 0x5D;
      voiceSerial.write(command, 10);
      break;
    
    case 3: // 田蓓蓓
      command[0] = 0xFD; command[1] = 0x00; command[2] = 0x07;
      command[3] = 0x01; command[4] = 0x01; command[5] = 0x5B;
      command[6] = 0x6D; command[7] = 0x35; command[8] = 0x33; 
      command[9] = 0x5D;
      voiceSerial.write(command, 10);
      break;
    
    case 4: // 唐老鸭
      command[0] = 0xFD; command[1] = 0x00; command[2] = 0x07;
      command[3] = 0x01; command[4] = 0x01; command[5] = 0x5B;
      command[6] = 0x6D; command[7] = 0x35; command[8] = 0x34; 
      command[9] = 0x5D;
      voiceSerial.write(command, 10);
      break;
    
    case 5: // 小燕子
      command[0] = 0xFD; command[1] = 0x00; command[2] = 0x07;
      command[3] = 0x01; command[4] = 0x01; command[5] = 0x5B;
      command[6] = 0x6D; command[7] = 0x35; command[8] = 0x35; 
      command[9] = 0x5D;
      voiceSerial.write(command, 10);
      break;
    
    case 6: // 贝童
      command[0] = 0xFD; command[1] = 0x00; command[2] = 0x07;
      command[3] = 0x01; command[4] = 0x01; command[5] = 0x5B;
      command[6] = 0x6D; command[7] = 0x35; command[8] = 0x36; 
      command[9] = 0x5D;
      voiceSerial.write(command, 10);
      break;
    
    case 7: // 晓可
      command[0] = 0xFD; command[1] = 0x00; command[2] = 0x07;
      command[3] = 0x01; command[4] = 0x01; command[5] = 0x5B;
      command[6] = 0x6D; command[7] = 0x35; command[8] = 0x37; 
      command[9] = 0x5D;
      voiceSerial.write(command, 10);
      break;
    
    default: // 默认使用尹小监
      command[0] = 0xFD; command[1] = 0x00; command[2] = 0x07;
      command[3] = 0x01; command[4] = 0x01; command[5] = 0x5B;
      command[6] = 0x6D; command[7] = 0x35; command[8] = 0x31; 
      command[9] = 0x5D;
      voiceSerial.write(command, 10);
  }
  
  delay(50);    // 确保指令发送完成
}


