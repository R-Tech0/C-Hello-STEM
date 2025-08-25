goog.provide('Blockly.Blocks.HELLO_STEM');
goog.require('Blockly.Blocks');



Blockly.Blocks.SHILI_Code= {
  init: function() { 
  this.appendDummyInput()
      .appendField("示例程序网址：www.hellostem.cn");
  this.setInputsInline(true);
  this.setColour(135);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.VTX316_Init= {
  init: function() { 
  this.appendDummyInput()
      .appendField("语音合成模块初始化");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.VTX316_YUYINBOBAO= {
  init: function() { 
  this.appendValueInput("YUYINBOBAO")
      .setCheck(null)
      .appendField("语音合成内容");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(120);
  this.setTooltip("需先将播报内容转为字符串");
  this.setHelpUrl("");
  }
};



Blockly.Blocks.VTX316_YINLIANG= {
  init: function() { 
  this.appendDummyInput()
      .appendField("播报音量设置(0-9)")
      .appendField(new Blockly.FieldNumber(5, 0, 9, 1), "YINLIANG");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};




Blockly.Blocks.VTX316_ZANTING= {
  init: function() { 
  this.appendDummyInput()
      .appendField("暂停播报");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(135);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.VTX316_HUIFU= {
  init: function() { 
  this.appendDummyInput()
      .appendField("恢复播放");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(135);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.TTX_YINXIAO= {
  init: function() { 
  this.appendDummyInput()
      .appendField("语音合成音效")
      .appendField(new Blockly.FieldDropdown([["警报","sound101"],["刷卡成功","sound102"],["风铃声","sound103"],["刷卡成功","sound104"],["刷卡成功","sound105"],["警报","sound106"],["警报紧急","sound107"],["叮咚","sound108"],["叮咚","sound201"],["警报声","sound202"],["滴（蜂鸣器）","sound901"],["滴（蜂鸣器）","sound902"],["咚","sound903"],["*注意要加延时*","0"]]), "YINXIAO");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(135);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.TTX_FAYANREN= {
  init: function() { 
  this.appendDummyInput()
      .appendField("发言人")
      .appendField(new Blockly.FieldDropdown([["晓玲","0"],["尹小监","1"],["易小强","2"],["田蓓蓓","3"],["唐老鸭","4"],["小燕子","5"],["贝童","6"],["晓可","7"]]), "FAYANREN");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(135);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.HC164D_init= {
  init: function() { 
  this.appendDummyInput()
      .appendField("数码管74HC164D");
  this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("SMG1"), "SMG_name");
  this.appendValueInput("CLK_Pin")
      .setCheck(null)
      .appendField("初始化   CLK  管脚 #");
  this.appendValueInput("DIO_Pin")
      .setCheck(null)
      .appendField(" DIO  管脚 #");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("初始化管脚");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.HC164D_display= {
  init: function() { 
  this.appendDummyInput()
      .appendField("数码管74HC164D");
  this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("SMG1"), "SMG_name");
  this.appendValueInput("value")
      .setCheck(null)
      .appendField("显示");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("显示数值");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.SMG_value= {
  init: function() { 
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["a","10"],["b","11"],["c","12"],["d","13"],["e","14"],["f","15"]]), "SMG_value");
  this.setOutput(true, null);
  this.setColour(90);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.HC595A_init= {
  init: function() { 
  this.appendDummyInput()
      .appendField("数码管74HC595A")
      .appendField(new Blockly.FieldTextInput("SMG2"), "SMG_name");
  this.appendValueInput("RCK_Pin")
      .setCheck(null)
      .appendField("初始化   RCK  管脚 #");
  this.appendValueInput("SCK_Pin")
      .setCheck(null)
      .appendField(" SCK  管脚 #");
  this.appendValueInput("DS_Pin")
      .setCheck(null)
      .appendField(" DS  管脚 #");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(195);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.HC595A_display= {
  init: function() { 
  this.appendDummyInput()
      .appendField("数码管74HC595A")
      .appendField(new Blockly.FieldTextInput("SMG2"), "SMG_name");
  this.appendValueInput("value")
      .setCheck(null)
      .appendField("显示");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(195);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


var YU_YIN=[["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],
["调为彩色", "6"],["打开空调", "7"],["关闭空调", "8"],["打开风扇", "9"],["关闭风扇", "16"],
["1档风", "17"],["2档风", "18"],["3档风", "19"],["自动模式", "20"],["制冷模式", "21"],
["制热模式", "22"],["升高温度", "23"],["降低温度", "24"],["打开台灯", "25"],["关闭台灯", "32"],
["调到最亮", "33"],["调到最暗", "34"],["调亮一点", "35"],["调暗一点", "36"],["查询温度", "37"],
["查询湿度", "38"],["查询天气", "39"],["前进", "40"],["后退", "41"],["左转", "48"],
["右转", "49"],["停止", "50"],["查询时间", "51"],["播放音乐", "52"],["上一首", "53"],
["下一首", "54"],["开始", "55"],["暂停", "56"]
];
var YU_BO=[["现在的温度是", "1"],["度", "2"],["现在的湿度是百分之", "3"],["一", "4"],["二", "5"],
["三", "6"],["四", "7"],["五", "8"],["六", "9"],["七", "10"],
["八", "11"],["九", "12"],["十", "13"],["个", "14"],["百", "15"],["千", "16"],
["万", "17"],["亿", "18"],["点", "19"],["负", "20"],["零", "21"],
["现在的时间是", "22"],["年", "23"],["月", "24"],["日", "25"],["点", "26"],
["分", "27"],["秒", "28"],["百分之", "29"],["现在的距离是", "30"],["毫米", "31"],["厘米", "32"],
["米", "33"],["千米", "34"]
];

Blockly.Blocks.yuyininit = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
      .appendField("初始化语音识别模块")
	this.appendDummyInput("")
	    .appendField(new Blockly.FieldDropdown([["软串口", "1"],["硬串口", "2"]]), "mode");
	this.appendDummyInput("")
      .appendField("RX为")
    this.appendValueInput("PIN1", Number)
        .setCheck(Number);
    this.appendDummyInput("")
      .appendField("TX为")
    this.appendValueInput("PIN2", Number)
      .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};


Blockly.Blocks.yuyinshibie = {
  init: function() {
    this.setColour(230);
    this.appendDummyInput("")
	    .appendField(new Blockly.FieldDropdown(YU_YIN), "PIN");
	this.appendDummyInput("")
		.appendField("指令")
    this.setOutput(true, Number);
	this.setInputsInline(true);
    this.setTooltip('特定指令词，需刷指定的固件，指令已转为10进制');
   // this.setPreviousStatement(true);
    //this.setNextStatement(true);
  }
};



Blockly.Blocks.yuyinshibie1 = {
  init: function() {
    this.setColour(120);
	this.appendValueInput("VALUE")
	    .setCheck(Number)
	    .appendField("识别到")
	this.setOutput(true, Boolean);
	//this.setInputsInline(true);
    this.setTooltip('识别到特定的指令词，也可根据需要设置16进制指令，例如：0x40');
  }
};






Blockly.Blocks.yuyinqinchu = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
	    .appendField("清除识别结果")
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.yuyinshuaxin = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
	    .appendField("刷新识别结果")
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.boxiaoshu = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
	    .appendField("播报小数")
    this.appendValueInput("XIAOSHU")
      .setCheck(null)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.bozhenshu = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
	    .appendField("播报整数")
    this.appendValueInput("ZHENSHU")
      .setCheck(null)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.yuyinbobao = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
	    .appendField("播报")
	    .appendField(new Blockly.FieldDropdown(YU_BO), "PIN3");
    this.setInputsInline(true);
   // this.setTooltip('');
   // this.setOutput(true, Boolean);
    // this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};




Blockly.Blocks.yuyingmokuai= {
  init: function() { 
  this.appendValueInput("Pin")
      .setCheck(null)
      .appendField("语音模块(127段日常用语)  管脚 #");
  this.appendDummyInput()
      .appendField("播放")
      .appendField(new Blockly.FieldDropdown([["老师","0x00"],["爸爸","0x01"],["妈妈","0x02"],["爷爷","0x03"],["奶奶","0x04"],["姥姥","0x05"],["姥爷","0x06"],["哥哥","0x08"],["姐姐","0x08"],["叔叔","0x09"],["阿姨","0x0A"],["上午","0x0B"],["下午","0x0C"],["晚上","0x0D"],["前方","0x0E"],["厘米","0x0F"],["新年快乐","0x10"],["身体健康","0x11"],["工作顺利","0x12"],["学习进步","0x13"],["您好","0x14"],["谢谢","0x15"],["的","0x16"],["祝","0x17"],["慢走","0x18"],["欢迎光临","0x19"],["亲爱的","0x1A"],["同学们","0x1B"],["工作辛苦了","0x1C"],["点","0x1D"],["打开","0x1E"],["关闭","0x1F"],["千","0x20"],["百","0x21"],["十/时","0x22"],["1","0x23"],["2","0x24"],["3","0x25"],["4","0x26"],["5","0x27"],["6","0x28"],["7","0x29"],["8","0x2A"],["9","0x2B"],["0","0x2C"],["当期","0x2D"],["转","0x2E"],["左","0x2F"],["右","0x30"],["请","0x31"],["已","0x32"],["现在","0x33"],["是","0x34"],["红灯","0x35"],["绿灯","0x36"],["黄灯","0x37"],["温度","0x38"],["湿度","0x39"],["欢迎常来","0x3A"],["还有","0x3B"],["秒","0x3C"],["分","0x3D"],["变","0x3E"],["等","0x3F"],["下一次","0x40"],["功能","0x41"],["障碍物","0x42"],["世界那么大，我想去看看","0x43"],["今天","0x44"],["年","0x45"],["月","0x46"],["日","0x47"],["星期","0x48"],["农历","0x49"],["现在时刻","0x4A"],["北京时间","0x4B"],["整","0x4C"],["度","0x4D"],["百分之","0x4E"],["距离","0x4F"],["厘米","0x50"],["明天","0x51"],["天气","0x52"],["白天","0x53"],["夜间","0x54"],["晴","0x55"],["多云","0x56"],["阴","0x57"],["雨","0x58"],["雷阵","0x59"],["小","0x5A"],["中","0x5B"],["大","0x5C"],["夹","0x5D"],["雪","0x5E"],["雾","0x5F"],["霾","0x60"],["风","0x61"],["东","0x62"],["南","0x63"],["西","0x64"],["北","0x65"],["到","0x66"],["级","0x67"],["偏","0x68"],["方向","0x69"],["空气质量","0x6A"],["优","0x6B"],["良","0x6C"],["轻度污染","0x6D"],["中度污染","0x6E"],["重度污染","0x6F"],["上","0x70"],["下","0x71"],["接近","0x72"],["远离","0x73"],["灯","0x74"],["远离","0x75"],["红色","0x76"],["绿色","0x77"],["蓝色","0x78"],["黄色","0x79"],["白色","0x7A"],["叮-音效","0x7B"],["滴滴滴-闹铃音效","0x7C"],["叮叮叮叮升-音效","0x7D"],["叮叮叮叮降-0音效","0x7E"]]), "Entry");
  this.appendValueInput("Delay")
      .setCheck(null)
      .appendField("延时");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(90);
  this.setTooltip("升级为127段常用语");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.Gesture_Sensor_Init= {
  init: function() { 
  this.appendDummyInput()
      .appendField("初始化手势传感器并判断是否成功");
  this.setOutput(true, null);
  this.setColour(90);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.Gesture_Sensor_SHIBIE= {
  init: function() { 
  this.appendDummyInput()
      .appendField("手势识别(中文字符串接收)");
  this.setOutput(true, null);
  this.setColour(120);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};



Blockly.Blocks.Gesture_Sensor_SHIBIE_ENG= {
  init: function() { 
  this.appendDummyInput()
      .appendField("手势识别(英文字符串接收)");
  this.setOutput(true, null);
  this.setColour(120);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};




Blockly.Blocks.IIC_Digital_Power= {
  init: function() { 
  this.appendDummyInput()
      .appendField("初始化I2C功率计 I2C地址")
      .appendField(new Blockly.FieldDropdown([["0x40","INA219_I2C_ADDRESS1"],["0x41","INA219_I2C_ADDRESS2"],["0x44","INA219_I2C_ADDRESS3"],["0x45","INA219_I2C_ADDRESS4"]]), "IIC_Address")
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(165);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};



Blockly.Blocks.BusVoltage= {
  init: function() { 
  this.appendDummyInput()
      .appendField("总线电压");
  this.setOutput(true, null);
  this.setColour(165);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.ShuntVoltage= {
  init: function() { 
  this.appendDummyInput()
      .appendField(" 分流电压");
  this.setOutput(true, null);
  this.setColour(165);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.Current= {
  init: function() { 
  this.appendDummyInput()
      .appendField("读取电流值");
  this.setOutput(true, null);
  this.setColour(165);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.Power= {
  init: function() { 
  this.appendDummyInput()
      .appendField("读取功率值");
  this.setOutput(true, null);
  this.setColour(165);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.PWM_begin_int = {
    init: function () {
        this.appendDummyInput("")
            .appendField("PWM控制板初始化")
            .appendField(new Blockly.FieldTextInput("pwm"), "VAR");
        this.appendValueInput("address_pwm")
            .setCheck(Number)
            .appendField("（地址）");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(200);
        this.setTooltip('初始化PWM控制板');
        this.setHelpUrl('');
    }
};

Blockly.Blocks.PWM_minmix_int = {
    init: function () {
        this.appendValueInput("MIN")
            .setCheck(Number)
            .appendField("PWM下限范围（1~4095）");
        this.appendValueInput("MAX")
            .setCheck(Number)
            .appendField("PWM的值上限范围（2~4096）");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('设置PWM的最小值，相对于4096');
        this.setHelpUrl('');
    }
};

Blockly.Blocks.PWM_setfreq_int = {
    init: function () {
        this.appendDummyInput("")
            .appendField("PWM频率设置")
            .appendField(new Blockly.FieldTextInput("pwm"), "VAR");
        this.appendValueInput("setfreq")
            .setCheck(Number)
            .appendField("（Hz）");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(200);
        this.setTooltip('设置PWM频率');
        this.setHelpUrl('');
    }
};

Blockly.Blocks.PWM_path_set = {

    init: function () {

        this.appendDummyInput("")
            .appendField("PWM通道设置")
            .appendField(new Blockly.FieldTextInput("pwm"), "VAR")
            .appendField("    通道号");;
        this.setInputsInline(true);
        this.appendValueInput("hour").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT)
        this.appendDummyInput("").appendField("ON");;
        this.appendValueInput("minute").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput("").appendField("OFF");
        this.appendValueInput("second").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput("");
        this.setOutput(false, Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(200);
        this.setTooltip("PWM通道，ON，OFF");
        this.setHelpUrl('');
    }

};

Blockly.Blocks.PWM_duoji_int = {
    init: function () {
        this.appendDummyInput("")
            .appendField("初始化为舵机")
            .appendField(new Blockly.FieldTextInput("PWMServo"), "VAR");
        this.appendValueInput("duojiaddress_pwm")
            .setCheck(Number)
            .appendField("  （控制板地址）");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(200);
        this.setTooltip('初始化PWM控制板');
        this.setHelpUrl('');
    }
};


Blockly.Blocks.PWM_duojipath_set = {
    init: function () {
        this.appendDummyInput("")
            .appendField("舵机设置")
            .appendField(new Blockly.FieldTextInput("PWMServo"), "VAR");
        this.appendValueInput("hour")
            .setCheck(Number)
            .appendField(" 通道号");
        this.appendValueInput("second")
            .setCheck(Number)
            .appendField(" 角度");
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(200);
        this.setTooltip("PWM通道，ON，OFF");
        this.setHelpUrl('');
    }
};


// 初始化 BMP180(I2C) —— 不返回状态（语句块）
Blockly.Blocks.make_arduino_bmp180_begin_i2c = {
  init: function () {
    this.appendValueInput("bmp180_oversampling")
        .setCheck(null)
//        .appendField(new Blockly.FieldImage("HELLO_STEM/media/Arduino/BMP180.png", 25, 25, "*"))

        .appendField("初始化BMP180(I2C)")
        .appendField(new Blockly.FieldTextInput("BMP"), "bmp180_name")
        .appendField(" 采样频率设为");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
    this.setTooltip(
      "1.功能:\n->初始化BMP180、BMP085大气压强传感器(I2C)\n2.语法:\n->Adafruit_BMP085();\n->boolean begin(uint8_t mode = BMP085_ULTRAHIGHRES);\n3.参数:\n->mode:\n4.返回值:uint8_t型数据(不使用返回值)"
      + "5.I2C接线:\n①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n②Arduino Mega2560/Due:SDA - 20，SCL - 21\n③Arduino Leonardo:SDA - 2，SCL - 3"
    );
    this.setHelpUrl("");
  }
};

// 初始化 BMP180(I2C) —— 返回连接状态（布尔，值块）
Blockly.Blocks.make_arduino_bmp180_begin_i2c_return_status = {
  init: function () {
    this.appendValueInput("bmp180_oversampling")
        .setCheck(null)
        //.appendField(new Blockly.FieldImage("media/Arduino/BMP180.png", 25, 25, "*"))
        .appendField("初始化BMP180(I2C)")
        .appendField(new Blockly.FieldTextInput("BMP"), "bmp180_name")
        .appendField(" 采样频率设为");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(40);
    this.setTooltip(
      "初始化BMP180|BMP085大气压强传感器(I2C)\n返回连接状态，返回数据的类型为boolean\nI2C接线:\n①Arduino Uno/Ethernet:SDA - A4，SCL - A5\n②Arduino Mega2560/Due:SDA - 20，SCL - 21\n③Arduino Leonardo:SDA - 2，SCL - 3"
    );
    this.setHelpUrl("");
  }
};

// 初始化 BMP180(I2C) —— 软件I2C（值块）
Blockly.Blocks.make_arduino_bmp180_begin_i2c_soft = {
  init: function () {
    this.appendDummyInput()
        //.appendField(new Blockly.FieldImage("media/Arduino/BMP180.png", 25, 25, "*"))
        .appendField("初始化BMP180(I2C)")
        .appendField(new Blockly.FieldTextInput("BMP"), "bmp180_name");
    this.appendValueInput("sda").setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField(" SDA#");
    this.appendValueInput("scl").setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField("SCL#");
    this.appendValueInput("oversampling").setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField("采样频率设为");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(40);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 采样频率选项（值块）
Blockly.Blocks.make_arduino_bmp180_oversampling = {
  init: function () {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["高", "BMP085_ULTRALOWPOWER"],
          ["中", "BMP085_STANDARD"],
          ["低", "BMP085_HIGHRES"],
          ["很低", "BMP085_ULTRAHIGHRES"]
        ]), "type");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(40);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 获取 温度/气压（值块）
Blockly.Blocks.make_arduino_bmp180_get_temperature_pressure = {
  init: function () {
    this.appendDummyInput()
        //.appendField(new Blockly.FieldImage("media/Arduino/BMP180.png", 25, 25, "*"))
        .appendField("BMP180")
        .appendField(new Blockly.FieldTextInput("BMP"), "bmp180_name")
        .appendField(" 获取")
        .appendField(new Blockly.FieldDropdown([["温度", "Temperature"], ["大气压强", "Pressure"]]), "bmp180_get_temperature_pressure_data");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(40);
    this.setTooltip("BMP180大气压强传感器获取温度和气压，返回数据的类型为float和int32_t");
    this.setHelpUrl("");
  }
};

// 获取 高度（值块）
Blockly.Blocks.make_arduino_bmp180_get_altitude = {
  init: function () {
    this.appendDummyInput()
        //.appendField(new Blockly.FieldImage("media/Arduino/BMP180.png", 25, 25, "*"))
        .appendField("BMP180")
        .appendField(new Blockly.FieldTextInput("BMP"), "bmp180_name")
        .appendField(" 获取高度");
    this.appendValueInput("bmp180_get_altitude_data").setCheck(null).appendField("基准值");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(40);
    this.setTooltip("BMP180大气压强传感器获取高度，返回数据的类型为float");
    this.setHelpUrl("");
  }
};

//MAX3010X心率传感器
var ruilong_MAX30102_TYPE = [
    ["温度(℃)", "particleSensor.readTemperature()"],
    ["温度(℉))", "particleSensor.readTemperatureF()"],
    ["红光", "particleSensor.getRed()"],
    ["红外光", "particleSensor.getIR()"],
    ["绿光", "particleSensor.getGreen()"],
];

Blockly.Blocks.ruilong_MAX3010X_Value = {
    init: function () {
        this.setColour(Blockly.Msg['RUILONG_HUE']);
        this.appendDummyInput("").appendField("MAX3010X心率血氧传感器");
        this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(ruilong_MAX30102_TYPE), "MAX3010X_TYPE");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip();
    }
};

Blockly.Blocks.ruilong_MAX3010X_HR = {
    init: function () {
        this.setColour(Blockly.Msg['RUILONG_HUE']);
        this.appendDummyInput("").appendField(new Blockly.FieldTextInput('Bmp_value'), 'VAR').appendField("MAX3010X心率血氧传感器 心率");
        this.appendStatementInput('DO');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

Blockly.Blocks.TDS_Init= {
  init: function() { 
  this.appendDummyInput()
      .appendField("初始化 TDS水质传感器 引脚#")
      .appendField(new Blockly.FieldDropdown([["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"],["A6","A6"],["A7","A7"]]), "TDS_Pin");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(240);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks.TDS_Start= {
  init: function() { 
  this.appendDummyInput()
      .appendField("开始采样");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(240);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


Blockly.Blocks.TDS_Value= {
  init: function() { 
  this.appendDummyInput()
      .appendField("检测水质值");
  this.setOutput(true, null);
  this.setColour(240);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

