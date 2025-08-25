goog.provide('Blockly.Arduino.HELLO_STEM');
goog.require('Blockly.Arduino');



Blockly.Arduino.forBlock.SHILI_Code = function() {
  var code = '';
  return code;
};

Blockly.Arduino.forBlock.VTX316_Init = function() {
  Blockly.Arduino.definitions_['INCLU'] = '#include "VTX316.h"';
  Blockly.Arduino.setups_['INIT'] = 'VTX316_Init();';
  var code = '';
  return code;
};

Blockly.Arduino.forBlock.VTX316_YUYINBOBAO = function() {
  var value_YUYINBOBAO = Blockly.Arduino.valueToCode(this, 'YUYINBOBAO', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Voice_BOBAO('+value_YUYINBOBAO +');\n';
  return code;
};

Blockly.Arduino.forBlock.VTX316_YINLIANG = function() {
  var number_YINLIANG = this.getFieldValue('YINLIANG');
  var code = 'Voice_YIN_LIANG('+number_YINLIANG+');';
  return code;
};

Blockly.Arduino.forBlock.VTX316_ZANTING = function() {
  var code = 'Voice_ZANTING();';
  return code;
};

Blockly.Arduino.forBlock.VTX316_HUIFU = function() {
  var code = 'Voice_HUIFU();';
  return code;
};

Blockly.Arduino.forBlock.TTX_YINXIAO = function() {
  var dropdown_YINXIAO = this.getFieldValue('YINXIAO');
  var code = 'Voice_BOBAO('+'"'+dropdown_YINXIAO +'"'+');';
  return code;
};

Blockly.Arduino.forBlock.TTX_FAYANREN = function() {
  var dropdown_FAYANREN = this.getFieldValue('FAYANREN');
  var code = 'Voice_FAYANREN('+dropdown_FAYANREN+');';
  return code;
};

Blockly.Arduino.forBlock.HC164D_init = function() {
  var text_SMG_name = this.getFieldValue('SMG_name');
  var value_CLK_Pin = Blockly.Arduino.valueToCode(this, 'CLK_Pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_DIO_Pin = Blockly.Arduino.valueToCode(this, 'DIO_Pin', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['HC164D_CLK_Init'+text_SMG_name] = 'unsigned char '+text_SMG_name+'_CLK_Pin='+value_CLK_Pin+';';
  Blockly.Arduino.definitions_['HC164D_DIO_Init'+text_SMG_name] = 'unsigned char '+text_SMG_name+'_DIO_Pin='+value_DIO_Pin+';';
  Blockly.Arduino.definitions_['HC164D_init'+text_SMG_name] = 'char HC164D_mylist[16]={0xc0,0xf9,0xa4,0xb0,0x99,0x92,0x82,0xf8,0x80,0x90,0x88,0x83,0xc6,0xa1,0x86,0x8e};';
  Blockly.Arduino.setups_['HC164D_CLK_Mode_Init'+text_SMG_name] = 'pinMode('+text_SMG_name+'_CLK_Pin, OUTPUT);';
  Blockly.Arduino.setups_['HC164D_DIO_Mode_Init'+text_SMG_name] = 'pinMode('+text_SMG_name+'_DIO_Pin, OUTPUT);';
  var code = '';
  return code;
};

Blockly.Arduino.forBlock.HC164D_display = function() {
  var text_SMG_name = this.getFieldValue('SMG_name');
  var value_value = Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'shiftOut('+text_SMG_name+'_DIO_Pin, '+text_SMG_name+'_CLK_Pin, MSBFIRST, HC164D_mylist['+value_value+']);'
			       + 'delay(1000);\n'
  return code;
};

Blockly.Arduino.forBlock.SMG_value = function() {
  var dropdown_SMG_value = this.getFieldValue('SMG_value');
  var code = dropdown_SMG_value;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock.HC595A_init = function() {
  var text_SMG_name = this.getFieldValue('SMG_name');
  var value_RCK_Pin = Blockly.Arduino.valueToCode(this, 'RCK_Pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_SCK_Pin = Blockly.Arduino.valueToCode(this, 'SCK_Pin', Blockly.Arduino.ORDER_ATOMIC);
  var value_DS_Pin = Blockly.Arduino.valueToCode(this, 'DS_Pin', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['HC595A_RCK_Init'+text_SMG_name] = 'unsigned char '+text_SMG_name+'_RCK_Pin='+value_RCK_Pin+';';
  Blockly.Arduino.definitions_['HC595A_SCK_Init'+text_SMG_name] = 'unsigned char '+text_SMG_name+'_SCK_Pin='+value_SCK_Pin+';';
  Blockly.Arduino.definitions_['HC595A_DS_Init'+text_SMG_name] = 'unsigned char '+text_SMG_name+'_DS_Pin='+value_DS_Pin+';';
  Blockly.Arduino.definitions_['HC595A_init'+text_SMG_name] = 'char HC595A_mylist[16]={0xc0,0xf9,0xa4,0xb0,0x99,0x92,0x82,0xf8,0x80,0x90,0x88,0x83,0xc6,0xa1,0x86,0x8e};';

  Blockly.Arduino.setups_['HC595A_RCK_Mode_Init'+text_SMG_name] = 'pinMode('+text_SMG_name+'_RCK_Pin, OUTPUT);';
  Blockly.Arduino.setups_['HC595A_SCK_Mode_Init'+text_SMG_name] = 'pinMode('+text_SMG_name+'_SCK_Pin, OUTPUT);';
  Blockly.Arduino.setups_['HC595A_DS_Mode_Init'+text_SMG_name] = 'pinMode('+text_SMG_name+'_DS_Pin, OUTPUT);';
  var code = '';
  return code;
};

Blockly.Arduino.forBlock.HC595A_display = function() {
  var text_SMG_name = this.getFieldValue('SMG_name');
  var value_value = Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'digitalWrite('+text_SMG_name+'_RCK_Pin,LOW);\n'
             + 'shiftOut('+text_SMG_name+'_DS_Pin, '+text_SMG_name+'_SCK_Pin, MSBFIRST, ~HC595A_mylist['+value_value+']);\n'
             + 'digitalWrite('+text_SMG_name+'_RCK_Pin,HIGH);\n'
  return code;
};

Blockly.Arduino.forBlock.yuyininit = function() {
  var mode = this.getFieldValue('mode');
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2',Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['define_yuyinflag'] = 'volatile int yuyin;';
  Blockly.Arduino.definitions_['var_tishi1'] = '// 串口发送消息最大长度';
  Blockly.Arduino.definitions_['var_yuyin2'] = '#define UART_SEND_MAX      32';
  Blockly.Arduino.definitions_['var_yuyin3'] = '#define UART_MSG_HEAD_LEN  2';
  Blockly.Arduino.definitions_['var_yuyin4'] = '#define UART_MSG_FOOT_LEN  2';
  Blockly.Arduino.definitions_['var_tishi2'] = '// 串口发送消息号';
  Blockly.Arduino.definitions_['var_yuyin5'] = '#define U_MSG_bozhensgshu      1';
  Blockly.Arduino.definitions_['var_yuyin6'] = '#define U_MSG_boxiaoshu      2';
  Blockly.Arduino.definitions_['var_yuyin7'] = '#define U_MSG_bobao1      3';
  Blockly.Arduino.definitions_['var_yuyin8'] = '#define U_MSG_bobao2      4';
  Blockly.Arduino.definitions_['var_yuyin9'] = '#define U_MSG_bobao3      5';
  Blockly.Arduino.definitions_['var_yuyin10'] = '#define U_MSG_bobao4      6';
  Blockly.Arduino.definitions_['var_yuyin11'] = '#define U_MSG_bobao5      7';
  Blockly.Arduino.definitions_['var_yuyin12'] = '#define U_MSG_bobao6      8';
  Blockly.Arduino.definitions_['var_yuyin13'] = '#define U_MSG_bobao7      9';
  Blockly.Arduino.definitions_['var_yuyin14'] = '#define U_MSG_bobao8      10';
  Blockly.Arduino.definitions_['var_yuyin15'] = '#define U_MSG_bobao9      11';
  Blockly.Arduino.definitions_['var_yuyin16'] = '#define U_MSG_bobao10      12';
  Blockly.Arduino.definitions_['var_yuyin17'] = '#define U_MSG_bobao11      13';
  Blockly.Arduino.definitions_['var_yuyin18'] = '#define U_MSG_bobao12      14';
  Blockly.Arduino.definitions_['var_yuyin19'] = '#define U_MSG_bobao13      15';
  Blockly.Arduino.definitions_['var_yuyin20'] = '#define U_MSG_bobao14      16';
  Blockly.Arduino.definitions_['var_yuyin21'] = '#define U_MSG_bobao15      17';
  Blockly.Arduino.definitions_['var_yuyin22'] = '#define U_MSG_bobao16      18';
  Blockly.Arduino.definitions_['var_yuyin23'] = '#define U_MSG_bobao17      19';
  Blockly.Arduino.definitions_['var_yuyin24'] = '#define U_MSG_bobao18      20';
  Blockly.Arduino.definitions_['var_yuyin25'] = '#define U_MSG_bobao19      21';
  Blockly.Arduino.definitions_['var_yuyin26'] = '#define U_MSG_bobao20      22';
  Blockly.Arduino.definitions_['var_yuyin27'] = '#define U_MSG_bobao21      23';
  Blockly.Arduino.definitions_['var_yuyin28'] = '#define U_MSG_bobao22      24';
  Blockly.Arduino.definitions_['var_yuyin29'] = '#define U_MSG_bobao23      25';
  Blockly.Arduino.definitions_['var_yuyin39'] = '#define U_MSG_bobao24      26';
  Blockly.Arduino.definitions_['var_yuyin30'] = '#define U_MSG_bobao25      27';
  Blockly.Arduino.definitions_['var_yuyin31'] = '#define U_MSG_bobao26      28';
  Blockly.Arduino.definitions_['var_yuyin32'] = '#define U_MSG_bobao27      29';
  Blockly.Arduino.definitions_['var_yuyin40'] = '#define U_MSG_bobao28      30';
  Blockly.Arduino.definitions_['var_yuyin33'] = '#define U_MSG_bobao29      31';
  Blockly.Arduino.definitions_['var_yuyin34'] = '#define U_MSG_bobao30      32';
  Blockly.Arduino.definitions_['var_yuyin35'] = '#define U_MSG_bobao31      33';
  Blockly.Arduino.definitions_['var_yuyin36'] = '#define U_MSG_bobao32      34';
  Blockly.Arduino.definitions_['var_yuyin37'] = '#define U_MSG_bobao33      35';
  Blockly.Arduino.definitions_['var_yuyin38'] = '#define U_MSG_bobao34      36';

  Blockly.Arduino.definitions_['var_tishi3'] = '// 串口消息参数类型';
  Blockly.Arduino.definitions_['var_def1'] = 'typedef union {\n'
  + '  double d_double;\n'
  + '  int d_int;\n'
  + '  unsigned char d_ucs[8];\n'
  + '  char d_char;\n'
  + '  unsigned char d_uchar;\n'
  + '  unsigned long d_long;\n'
  + '  short d_short;\n'
  + '  float d_float;'
  + '}uart_param_t;\n';

  if (mode == 1){
	Blockly.Arduino.definitions_['define_arduino'] = '#include <SoftwareSerial.h>';
	Blockly.Arduino.definitions_['var_yuyin1'] = 'SoftwareSerial mySerial('+dropdown_pin1+','+dropdown_pin2+');';
	Blockly.Arduino.definitions_['var_tishi4'] = '// 串口发送函数实现';
	Blockly.Arduino.definitions_['var_def3'] = 'void _uart_send_impl(unsigned char* buff, int len) {\n'
  + '  // TODO: 调用项目实际的串口发送函数\n'
  + '  for(int i=0;i<len;i++)\n'
  + '{\n'
  + '   mySerial.write (*buff++);\n'
  + '}\n'
  + '}\n';
  Blockly.Arduino.setups_['setup_output_myserial'] = 'mySerial.begin(9600);';
  var code='if (mySerial.available() > 0) {\n'
  + 'yuyin = mySerial.read();\n'
  + ' Serial.println(yuyin,HEX);\n'
  + '}\n';
  }
  else if (mode == 2){
	Blockly.Arduino.definitions_['define_arduino1'] = '#include <HardwareSerial.h>';
	Blockly.Arduino.definitions_['var_tishi41'] = '// 串口发送函数实现';
	Blockly.Arduino.definitions_['var_def31'] = 'void _uart_send_impl(unsigned char* buff, int len) {\n'
  + '  // TODO: 调用项目实际的串口发送函数\n'
  + '  for(int i=0;i<len;i++)\n'
  + '{\n'
  + '   Serial2.write (*buff++);\n'
  + '}\n'
  + '}\n';
  Blockly.Arduino.setups_['setup_output_serial2'] = 'Serial2.begin(9600,SERIAL_8N1,'+dropdown_pin1+','+dropdown_pin2+');';
  var code='if (Serial2.available() > 0) {\n'
  + 'yuyin = Serial2.read();\n'
  + ' Serial.println(yuyin,HEX);\n'
  + '}\n';
  }

  Blockly.Arduino.definitions_['var_tishi0'] = '// 串口通信消息尾';
  Blockly.Arduino.definitions_['var_def2'] = 'const unsigned char g_uart_send_foot[] = {\n'
  + '  0x55, 0xaa\n'
  + '};\n';

  Blockly.Arduino.definitions_['var_tishi5'] = '// 十六位整数转32位整数';
  Blockly.Arduino.definitions_['var_def4'] = 'void _int16_to_int32(uart_param_t* param) {\n'
  + '  if (sizeof(int) >= 4)\n'
  + '    return;\n'
  + '  unsigned long value = param->d_long;\n'
  + '  unsigned long sign = (value >> 15) & 1;\n'
  + '  unsigned long v = value;\n'
  + '  if (sign)\n'
  + '    v = 0xFFFF0000 | value;\n'
  + '  uart_param_t p;'
  + '  p.d_long = v;\n'
  + '  param->d_ucs[0] = p.d_ucs[0];\n'
  + '  param->d_ucs[1] = p.d_ucs[1];\n'
  + '  param->d_ucs[2] = p.d_ucs[2];\n'
  + '  param->d_ucs[3] = p.d_ucs[3];\n'
  + '}\n';
  Blockly.Arduino.definitions_['var_tishi6'] = '// 浮点数转双精度';
  Blockly.Arduino.definitions_['var_def5'] = 'void _float_to_double(uart_param_t* param) {\n'
  + '  if (sizeof(int) >= 4)\n'
  + '    return;\n'
  + '  unsigned long value = param->d_long;\n'
  + '  unsigned long sign = value >> 31;\n'
  + '  unsigned long M = value & 0x007FFFFF;\n'
  + '  unsigned long e =  ((value >> 23 ) & 0xFF) - 127 + 1023;\n'
  + '  uart_param_t p0, p1;\n'
  + '  p1.d_long = ((sign & 1) << 31) | ((e & 0x7FF) << 20) | (M >> 3);\n'
  + '  param->d_ucs[0] = p0.d_ucs[0];\n'
  + '  param->d_ucs[1] = p0.d_ucs[1];\n'
  + '  param->d_ucs[2] = p0.d_ucs[2];\n'
  + '  param->d_ucs[3] = p0.d_ucs[3];\n'
  + '  param->d_ucs[4] = p1.d_ucs[0];\n'
  + '  param->d_ucs[5] = p1.d_ucs[1];\n'
  + '  param->d_ucs[6] = p1.d_ucs[2];\n'
  + '  param->d_ucs[7] = p1.d_ucs[3];\n'
  + '}\n';
  Blockly.Arduino.definitions_['var_tishi7'] = '// 串口通信消息头';
  Blockly.Arduino.definitions_['var_def6'] = 'const unsigned char g_uart_send_head[] = {\n'
  + '  0xaa, 0x55\n'
  + '};\n';
  Blockly.Arduino.setups_['setup_output_flag'] = 'yuyin = 0;';
  Blockly.Arduino.setups_['setup_output_serial'] = 'Serial.begin(9600);';
  return code;
};

Blockly.Arduino.forBlock.yuyinshibie = function()
{
  var dropdown_pin = this.getFieldValue('PIN');
  var code= dropdown_pin;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock.yuyinshibie1 = function()
{
  var VALUE = Blockly.Arduino.valueToCode(this, "VALUE", Blockly.Arduino.ORDER_ATOMIC);
  var code='yuyin == '+VALUE+'';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock.yuyinqinchu = function()
{
  var code='yuyin = 0;\n';
  return code;
};

Blockly.Arduino.forBlock.yuyinshuaxin = function()
{
  var code='if (mySerial.available() > 0) {\n'
  + 'yuyin = mySerial.read();\n'
  + ' Serial.println(yuyin,HEX);\n'
  + '}\n';
  return code;
};
Blockly.Arduino.forBlock.boxiaoshu = function()
{
  Blockly.Arduino.definitions_['var_boxiaoshutishi'] = '// 播报小数';
  Blockly.Arduino.definitions_['var_boxiaoshuhanshu'] = 'void _uart_boxiaoshu(float xiaoshu) {\n'
  + '  uart_param_t param;\n'
  + '    int i = 0;\n'
  + '    unsigned char buff[UART_SEND_MAX] = {0};\n'
  + '    for (i = 0; i < UART_MSG_HEAD_LEN; i++) {\n'
  + '        buff[i + 0] = g_uart_send_head[i];\n'
  + '    }\n'
  + '    buff[2] = U_MSG_boxiaoshu;\n'
  + '    param.d_double = xiaoshu;\n'
  + '    _float_to_double(&param);\n'
  + '    buff[3] = param.d_ucs[0];\n'
  + '    buff[4] = param.d_ucs[1];\n'
  + '    buff[5] = param.d_ucs[2];\n'
  + '    buff[6] = param.d_ucs[3];\n'
  + '    buff[7] = param.d_ucs[4];\n'
  + '    buff[8] = param.d_ucs[5];\n'
  + '    buff[9] = param.d_ucs[6];\n'
  + '    buff[10] = param.d_ucs[7];\n'
  + '    for (i = 0; i < UART_MSG_FOOT_LEN; i++) {\n'
  + '        buff[i + 11] = g_uart_send_foot[i];\n'
  + '    }\n'
  + '    _uart_send_impl(buff, 13);\n'
  + '}\n';
  var fre = Blockly.Arduino.valueToCode(this, 'XIAOSHU',
     Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var code="_uart_boxiaoshu("+fre+");\n";
  return code;
};

Blockly.Arduino.forBlock.bozhenshu = function()
{
  Blockly.Arduino.definitions_['var_bozhenshutishi'] = '// 播报整数';
  Blockly.Arduino.definitions_['var_bozhenshuhanshu'] = 'void _uart_bozhensgshu(int zhengshu) {\n'
  + '  uart_param_t param;\n'
  + '    int i = 0;\n'
  + '    unsigned char buff[UART_SEND_MAX] = {0};\n'
  + '    for (i = 0; i < UART_MSG_HEAD_LEN; i++) {\n'
  + '        buff[i + 0] = g_uart_send_head[i];\n'
  + '    }\n'
  + '    buff[2] = U_MSG_bozhensgshu;\n'
  + '    param.d_int = zhengshu;\n'
  + '    _int16_to_int32(&param);\n'
  + '    buff[3] = param.d_ucs[0];\n'
  + '    buff[4] = param.d_ucs[1];\n'
  + '    buff[5] = 0;\n'
  + '    buff[6] = 0;\n'
  + '    for (i = 0; i < UART_MSG_FOOT_LEN; i++) {\n'
  + '        buff[i + 7] = g_uart_send_foot[i];\n'
  + '    }\n'
  + '    _uart_send_impl(buff, 9);\n'
  + '}\n';
  var fre1 = Blockly.Arduino.valueToCode(this, 'ZHENSHU',
     Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var code="_uart_bozhensgshu("+fre1+");\n";
  return code;
};

Blockly.Arduino.forBlock.yuyinbobao = function()
{
    var dropdown_pin = this.getFieldValue('PIN3');
    Blockly.Arduino.definitions_['var_bobaotishi'+ dropdown_pin] = '// 播报函数'+ dropdown_pin ;
	Blockly.Arduino.definitions_['var_bobaohanshu'+ dropdown_pin ] = 'void _uart_bobao' + dropdown_pin + '() {\n'
    + '  uart_param_t param;\n'
    + '    int i = 0;\n'
    + '    unsigned char buff[UART_SEND_MAX] = {0};\n'
    + '    for (i = 0; i < UART_MSG_HEAD_LEN; i++) {\n'
    + '        buff[i + 0] = g_uart_send_head[i];\n'
    + '    }\n'
    + '    buff[2] = U_MSG_bobao' + dropdown_pin + ';\n'
    + '    for (i = 0; i < UART_MSG_FOOT_LEN; i++) {\n'
    + '        buff[i + 3] = g_uart_send_foot[i];\n'
    + '    }\n'
    + '    _uart_send_impl(buff, 5);\n'
    + '}\n';
    var code='_uart_bobao' + dropdown_pin + '();\n';
  return code;
};

Blockly.Arduino.forBlock.yuyingmokuai = function() {
  var value_Pin = Blockly.Arduino.valueToCode(this, 'Pin', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_Entry = this.getFieldValue('Entry');
  var value_Delay = Blockly.Arduino.valueToCode(this, 'Delay', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['Define'] = 'void send_data(int addr) {\nint i;\ndigitalWrite('+value_Pin+', LOW);\ndelay(3); //>2ms\nfor (i = 0; i < 8; i++) {\ndigitalWrite('+value_Pin+', HIGH);\nif (addr & 1) {\ndelayMicroseconds(2400); //>2400us\ndigitalWrite('+value_Pin+', LOW);\ndelayMicroseconds(800);\n} //>800us\nelse {\ndelayMicroseconds(800); //>800us\ndigitalWrite('+value_Pin+', LOW);\ndelayMicroseconds(2400);\n} //>2400us\naddr >>= 1;\n}\ndigitalWrite('+value_Pin+', HIGH);\n}\n';
  Blockly.Arduino.setups_['Init+'+value_Pin+''] = 'pinMode('+value_Pin+', OUTPUT);\n';
  var code = 'send_data('+dropdown_Entry+'); //volume control 0xE0-E7;\ndelay('+value_Delay+');\n';
  return code;
};

Blockly.Arduino.forBlock.IIC_Digital_Power = function() {
  var dropdown_IIC_Address = this.getFieldValue('IIC_Address');
  var dropdown_Baud_Rate = this.getFieldValue('Baud_Rate');
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_'+'DFRobot'] = '#include "DFRobot_INA219.h"';
  Blockly.Arduino.definitions_['include_'+'IIC_Choose'] = '\nDFRobot_INA219_IIC     ina219(&Wire, '+dropdown_IIC_Address +');';
  Blockly.Arduino.definitions_['include_'+'BIANLAING_1'] = '\nfloat ina219Reading_mA = 1000;';
  Blockly.Arduino.definitions_['include_'+'BIANLAING_2'] = 'float extMeterReading_mA = 1000;';
  var code = '';
  return code;
};

Blockly.Arduino.forBlock.BusVoltage = function() {
  var code = 'ina219.getBusVoltage_V()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock.ShuntVoltage = function() {
  var code = 'ina219.getShuntVoltage_mV()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock.Current = function() {
  var code = 'ina219.getCurrent_mA()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock.Power = function() {
  var code = 'ina219.getPower_mW()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock['PWM_begin_int'] = function () {
    var varName = this.getFieldValue('VAR');
    var setaddressName = Blockly.Arduino.valueToCode(this, 'address_pwm', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['define1_PWM_Servo'] = '#include "Wire.h"';
    Blockly.Arduino.definitions_['define2_PWM_Servo'] = '#include "Adafruit_PWMServoDriver.h"';
    Blockly.Arduino.definitions_['define3_PWM_Servo' + varName] = 'Adafruit_PWMServoDriver ' + varName + ' = ' + 'Adafruit_PWMServoDriver' + '(' + setaddressName + ');';
    Blockly.Arduino.setups_['setup_' + varName + '_init1'] = varName + '.begin();';
    var code = "";
    return code;
};

Blockly.Arduino.forBlock['PWM_minmix_int'] = function () {
    var varName = this.getFieldValue('VAR');
    var MINName = Blockly.Arduino.valueToCode(this, 'MIN', Blockly.Arduino.ORDER_ATOMIC);
    var MAXName = Blockly.Arduino.valueToCode(this, 'MAX', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['define1_joystick_1'] = '#define SERVOMIN  ' + MINName;
    Blockly.Arduino.definitions_['define2_joystick_1'] = '#define SERVOMAX  ' + MAXName;
    var code = "";
    return code;
};
Blockly.Arduino.forBlock['PWM_setfreq_int'] = function () {
    var varName = this.getFieldValue('VAR');
    var setfreqName = Blockly.Arduino.valueToCode(this, 'setfreq', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_' + varName + '_init2'] = varName + '.setPWMFreq(' + setfreqName + ');';
    var code = "";
    return code;
};
Blockly.Arduino.forBlock['PWM_path_set'] = function () {
    var varName = this.getFieldValue('VAR');
    var hour = Blockly.Arduino.valueToCode(this, 'hour', Blockly.Arduino.ORDER_ATOMIC);
    var minute = Blockly.Arduino.valueToCode(this, 'minute', Blockly.Arduino.ORDER_ATOMIC);
    var second = Blockly.Arduino.valueToCode(this, 'second', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    code += varName + '.setPWM(' + hour + ',' + minute + ',' + second + ');\n';
    return code;
};
Blockly.Arduino.forBlock['PWM_duoji_int'] = function () {
    var varName = this.getFieldValue('VAR');
    var setaddressName = Blockly.Arduino.valueToCode(this, 'duojiaddress_pwm', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['define1_PWM_Servo'] = '#include "Wire.h"';
    Blockly.Arduino.definitions_['define2_PWM_Servo'] = '#include "Adafruit_PWMServoDriver.h"';
    Blockly.Arduino.definitions_['define3_PWM_Servo' + varName] = 'Adafruit_PWMServoDriver ' + varName + ' = ' + 'Adafruit_PWMServoDriver' + '(' + setaddressName + ');';
    Blockly.Arduino.setups_['setup_' + varName + '_init1'] = varName + '.begin();';
    Blockly.Arduino.setups_['setup_' + varName + '_init2'] = varName + '.setPWMFreq(' + 85 + ');';
    var code = "";
    return code;
};
Blockly.Arduino.forBlock['PWM_duojipath_set'] = function () {
    var varName = this.getFieldValue('VAR');
    var hour = Blockly.Arduino.valueToCode(this, 'hour', Blockly.Arduino.ORDER_ATOMIC);
    var second = Blockly.Arduino.valueToCode(this, 'second', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    code += varName + '.setPWM(' + hour + ',' + 0 + ',' + '(map(' + second + ', 0, 180, 140, 680)));\n';
    return code;
};


// 初始化 BMP180(I2C) —— 不返回状态：放到 setup()
Blockly.Arduino.forBlock['make_arduino_bmp180_begin_i2c'] = function () {
  var value_bmp180_oversampling = Blockly.Arduino.valueToCode(this, 'bmp180_oversampling', Blockly.Arduino.ORDER_ATOMIC);
  var text_bmp180_name = this.getFieldValue('bmp180_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_BMP085'] = '#include <Adafruit_BMP085.h>';

  Blockly.Arduino.definitions_['var_declare_bmp180_' + text_bmp180_name] = 'Adafruit_BMP085 ' + text_bmp180_name + ';';

  Blockly.Arduino.setups_['setup_BMP180_' + text_bmp180_name] = text_bmp180_name + '.begin(' + value_bmp180_oversampling + ');';

  var code = '';
  return code;
};

// 初始化 BMP180(I2C) —— 返回连接状态（值）
Blockly.Arduino.forBlock['make_arduino_bmp180_begin_i2c_return_status'] = function () {
  var value_bmp180_oversampling = Blockly.Arduino.valueToCode(this, 'bmp180_oversampling', Blockly.Arduino.ORDER_ATOMIC);
  var text_bmp180_name = this.getFieldValue('bmp180_name');

  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_BMP085'] = '#include <Adafruit_BMP085.h>';

  Blockly.Arduino.definitions_['var_declare_bmp180_' + text_bmp180_name] = 'Adafruit_BMP085 ' + text_bmp180_name + ';';

  var code = text_bmp180_name + '.begin(' + value_bmp180_oversampling + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 初始化 BMP180 —— 软件I2C（返回值）
Blockly.Arduino.forBlock['make_arduino_bmp180_begin_i2c_soft'] = function () {
  var text_bmp180_name = this.getFieldValue('bmp180_name');
  var value_sda = Blockly.Arduino.valueToCode(this, 'sda', Blockly.Arduino.ORDER_ATOMIC);
  var value_scl = Blockly.Arduino.valueToCode(this, 'scl', Blockly.Arduino.ORDER_ATOMIC);
  var value_oversampling = Blockly.Arduino.valueToCode(this, 'oversampling', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_SoftwareWire'] = '#include <SoftwareWire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_BMP085_Soft'] = '#include "Adafruit_BMP085_Soft.h"';
  Blockly.Arduino.definitions_['var_declare_SoftwareWire' + value_sda + '_' + value_scl] = 'SoftwareWire Wire_' + value_sda + '_' + value_scl + '(' + value_sda + ', ' + value_scl + ');';
  Blockly.Arduino.definitions_['var_declare_' + text_bmp180_name] = 'Adafruit_BMP085_Soft ' + text_bmp180_name + ';';

  var code = text_bmp180_name + '.begin(' + value_oversampling + ', &Wire_' + value_sda + '_' + value_scl + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 采样频率（值）
Blockly.Arduino.forBlock['make_arduino_bmp180_oversampling'] = function () {
  var dropdown_type = this.getFieldValue('type');
  var code = dropdown_type;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 获取 温度/气压（值）
Blockly.Arduino.forBlock['make_arduino_bmp180_get_temperature_pressure'] = function () {
  var text_bmp180_name = this.getFieldValue('bmp180_name');
  var dropdown_bmp180_get_temperature_pressure_data = this.getFieldValue('bmp180_get_temperature_pressure_data');
  var code = text_bmp180_name + '.read' + dropdown_bmp180_get_temperature_pressure_data + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 获取 高度（值）
Blockly.Arduino.forBlock['make_arduino_bmp180_get_altitude'] = function () {
  var text_bmp180_name = this.getFieldValue('bmp180_name');
  var value_bmp180_get_altitude_data = Blockly.Arduino.valueToCode(this, 'bmp180_get_altitude_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = text_bmp180_name + '.readAltitude(' + value_bmp180_get_altitude_data + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//MAX30105心率血氧传感器
Blockly.Arduino.forBlock['ruilong_MAX3010X_Value'] = function () {
    Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
    Blockly.Arduino.definitions_['include_MAX30105'] = '#include "MAX30105.h"';
    Blockly.Arduino.definitions_['MAX30105_particleSensor'] = 'MAX30105 particleSensor;';


    Blockly.Arduino.setups_['setup_particleSensor_begin'] = 'particleSensor.begin();';
    Blockly.Arduino.setups_['setup_particleSensor_setup'] = 'particleSensor.setup();';

    var dropdown_type = this.getFieldValue('MAX3010X_TYPE');
    var code = dropdown_type;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock['ruilong_MAX3010X_HR'] = function () {
    var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var branch = Blockly.Arduino.statementToCode(this, 'DO');

    Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
    Blockly.Arduino.definitions_['include_MAX30105'] = '#include "MAX30105.h"'
    Blockly.Arduino.definitions_['include_heartRate'] = '#include "heartRate.h"'

    Blockly.Arduino.definitions_['MAX30105_particleSensor'] = 'MAX30105 particleSensor;';
    Blockly.Arduino.definitions_['MAX30105_var'] = 'const byte RATE_SIZE = 4; //Increase this for more averaging. 4 is good.\n'
        + ' byte rates[RATE_SIZE]; //Array of heart rates\n'
        + ' byte rateSpot = 0;\n'
        + ' long lastBeat = 0; //Time at which the last beat occurred\n'
        + ' float beatsPerMinute;\n'
        + ' int ' + variable + ';\n';

    Blockly.Arduino.setups_['setup_MAX30105'] = 'particleSensor.begin(Wire, I2C_SPEED_FAST);\n'
        + '  particleSensor.setup(); //Configure sensor with default settings\n'
        + '  particleSensor.setPulseAmplitudeRed(0x0A); //Turn Red LED to low to indicate sensor is running\n'
        + '  particleSensor.setPulseAmplitudeGreen(0); //Turn off Green LED\n';
    var code = 'long irValue = particleSensor.getIR();\n'
        + 'if (checkForBeat(irValue) == true)\n'
        + '  {\n'
        + '    //We sensed a beat!\n'
        + '    long delta = millis() - lastBeat;\n'
        + '    lastBeat = millis();\n'

        + '    beatsPerMinute = 60 / (delta / 1000.0);\n'

        + '    if (beatsPerMinute < 255 && beatsPerMinute > 20)\n'
        + '    {\n'
        + '      rates[rateSpot++] = (byte)beatsPerMinute; //Store this reading in the array\n'
        + '      rateSpot %= RATE_SIZE; //Wrap variable\n'

        + '      //Take average of readings\n'
        + variable + ' = 0;\n'
        + '      for (byte x = 0 ; x < RATE_SIZE ; x++)\n'
        + variable + ' += rates[x];\n'
        + variable + ' /= RATE_SIZE;\n'
        + '    }\n'
        + '  }\n'
        + branch;

    return code;
};


Blockly.Arduino.forBlock.TDS_Init = function() {
  var dropdown_TDS_Pin = this.getFieldValue('TDS_Pin');
  Blockly.Arduino.definitions_['define_'+'GravityTDS'] = '#include "GravityTDS.h"\n';
  Blockly.Arduino.definitions_['include_'+'PIN'] = '#define TdsSensorPin '+dropdown_TDS_Pin;
  Blockly.Arduino.definitions_['include_'+'gra'] = 'GravityTDS gravityTds;';
  Blockly.Arduino.setups_['setPin'] = 'gravityTds.setPin(TdsSensorPin);';
  Blockly.Arduino.setups_['setAref'] = 'gravityTds.setAref(5.0);';
  Blockly.Arduino.setups_['setAdcRange'] = 'gravityTds.setAdcRange(1024);';
  Blockly.Arduino.setups_['begin'] = 'gravityTds.begin();';
  var code = '';
  return code;
};


Blockly.Arduino.forBlock.TDS_Start = function() {
  var code = 'gravityTds.update();';
  return code;
};


Blockly.Arduino.forBlock.TDS_Value = function() {
  var code = 'gravityTds.getTdsValue()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
