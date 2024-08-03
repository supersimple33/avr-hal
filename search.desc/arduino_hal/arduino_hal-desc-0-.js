searchState.loadedDescShard("arduino_hal", 0, "<code>arduino-hal</code>\nDefault clock speed for this board.\nDelay type for <code>embedded-hal</code> compatibility.\nAnalog to Digital converter.\nMCU core clock support.\nConvenience macro to instantiate the <code>Usart</code> driver for this …\nDelay execution for a number of milliseconds.\nDelay execution for a number of microseconds.\nAttribute to declare the entry point of the program\nI2C bus controller.\nConvenience macro to instantiate the <code>Pins</code> struct for this …\nGPIO &amp; Pin control.\nSPI controller.\nDefault reference voltage (default).\nCheck the <code>avr_hal_generic::adc::Adc</code> documentation.\nTrait marking a type as an ADC channel for a certain ADC.\nInternal trait for the low-level ADC peripheral.\nConfiguration for the ADC peripheral.\nVoltage applied to AREF pin.\nCheck the <code>avr_hal_generic::adc::Channel</code> documentation.\nChannel ID type for this ADC.\nThe division factor between the system clock frequency and …\n(default)\nInternal reference voltage.\nSelect the voltage reference for the ADC peripheral\nSettings type for this ADC.\nAdditional channels\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nClear the DIDR (Digital Input Disable) for a certain …\nSet the DIDR (Digital Input Disable) for a certain channel.\nInitialize the ADC peripheral with the specified settings.\nCheck whether the ADC is currently converting a signal.\nRead out the ADC data register.\nSet the multiplexer to a certain channel.\nStart a conversion on the currently selected channel.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA clock speed\nFrequency of this clock in Hz\n1 MHz Clock\n10 MHz Clock\n12 MHz Clock\n16 MHz Clock\n20 MHz Clock\n24 MHz Clock\n8 MHz Clock\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nInternal trait for low-level EEPROM peripherals.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nErase a single byte at offset <code>address</code>.  Does not do a …\nRead a single byte from offset <code>address</code>.  Does not do a …\nErase and write a single byte at offset <code>address</code>.  Does not …\nNo slave answered for this address or a slave replied NACK\nLost arbitration while trying to acquire bus\nA bus-error occured\nSlave replied NACK to sent data\nI2C Transfer Direction\nI2C Error\nInternal trait for low-level I2C peripherals.\nRead from a slave (LSB is 1)\nAn unknown error occured.  The bus might be in an unknown …\nWrite to a slave (LSB is 0)\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRead some bytes from the bus.\nSetup the bus for operation at a certain speed.\nStart a bus transaction to a certain <code>address</code> in either …\nSend a stop-condition and release the bus.\nWrite some bytes to the bus.\nTWI Status Codes\nIllegal start or stop condition\nArbitration lost in SLA+R or NACK\nData received, ACK returned\nData received, NACK returned\nSLA+R transmitted, ACK received\nSLA+R transmitted, NACK received\nArbitration lost in SLA+W or data\nData transmitted, ACK received\nData transmitted, NACK received\nSLA+W transmitted, ACK received\nSLA+W transmitted, NACK received\nNo state information available\nRepeated start condition transmitted\nArbitration lost in SLA+RW, general call received, ACK …\nArbitration lost in SLA+RW, SLA+W received, ACK returned\nData received, ACK returned\nData received, NACK returned\nGeneral call received, ACK returned\nGeneral call data received, ACK returned\nGeneral call data received, NACK returned\nSLA+W received, ACK returned\nStop or repeated start condition received while selected\nStart condition transmitted\nArbitration lost in SLA+RW, SLA+R received, ACK returned\nData transmitted, ACK received\nData transmitted, NACK received\nLast data byte transmitted, ACK received\nSLA+R received, ACK returned\n<code>A0</code>\n<code>A1</code>\n<code>A2</code>\n<code>A3</code>\n<code>A4</code>\n<code>A5</code>\n<code>D0</code> / <code>RX</code>\n<code>D1</code> / <code>TX</code>\n<code>D10</code>\n<code>D11</code>\n<code>D12</code>\n<code>D13</code>\n<code>D2</code>\n<code>D3</code>\n<code>D4</code>\n<code>D5</code>\n<code>D6</code>\n<code>D7</code>\n<code>D8</code>\n<code>D9</code>\nType-alias for a pin type which can represent any concrete …\nPins of the <strong>Arduino Uno</strong>, <strong>Arduino Nano</strong>, <strong>SparkFun ProMini </strong>…\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nGPIO pin modes\nPin is configured as an analog input (for the ADC).\nAny input (floating or pulled-up), used like …\nFloating input, used like <code>Input&lt;Floating&gt;</code>.\nPin is configured as digital input (floating or pulled-up).\nPin is configured as a digital output with open drain …\nPin is configured as a digital output.\nPulled-up input, used like <code>Input&lt;PullUp&gt;</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe type of the value returned by <code>capture</code>\nEnumeration of channels that can be used with this <code>Capture</code> …\nEnumeration of channels that can be used with this <code>Pwm</code> …\nThe type of the value returned by <code>count</code>\nType for the <code>duty</code> methods\nType for the <code>duty</code> methods\nThe error associated to this writer\nError type returned by ADC methods\nError type\nError type\nError type\nError type\nThe type of error that can occur when writing\nError type\nError type\nRead error\nWrite error\nAn enumeration of SPI errors\nEnumeration of <code>Capture</code> errors\nType of the <code>Ok</code> variant of the result.\nThe unit of time used by this timer\nUnit of time used by the watchdog\nA time unit that can be converted into a human time unit …\nA time unit that can be converted into a human time unit …\nInput capture\nPulse Width Modulation\nA single PWM channel / pin\nQuadrature encoder interface\nADCs that sample on single channels per request, and do so …\nMillisecond delay\nMicrosecond delay\nBlocking read\nBlocking write\nBlocking write + read\nBlocking read\nWrite half of a serial interface (blocking variant)\nBlocking transfer\nBlocking write\nSingle digital input pin\nSingle digital push-pull output pin\nOutput pin that can be toggled\nRead half of a serial interface\nWrite half of a serial interface\nFull duplex (master mode)\nA count down timer\nFeeds an existing watchdog to ensure the processor isn’t …\nDisables a running watchdog timer so the processor won’t …\nEnables A watchdog timer to reset the processor if …\nA collection of methods that are required / used to format …\nUnwrapping an infallible result into its success value.\nBlock until the serial interface has sent all buffered …\nWrites a slice, blocking until everything has been written\n“Waits” for a transition in the capture <code>channel</code> and …\nReturns the current pulse count of the encoder\nPauses execution for <code>ms</code> milliseconds\nPauses execution for <code>us</code> microseconds\nReturns the count direction\nDisables the watchdog\nDisables a capture <code>channel</code>\nDisables a PWM <code>channel</code>\nDisables a PWM <code>channel</code>\nEnables a capture <code>channel</code>\nEnables a PWM <code>channel</code>\nEnables a PWM <code>channel</code>\nTriggers the watchdog. This must be done once the watchdog …\nEnsures that none of the previously written words are …\nReturns the current duty cycle\nReturns the current duty cycle\nReturns the maximum duty cycle value\nReturns the maximum duty cycle value\nReturns the current PWM period\nReturns the current resolution\nIs the input pin high?\nIs the input pin low?\nRequest that the ADC begin a conversion on the specified …\nReads enough bytes from slave with <code>address</code> to fill <code>buffer</code>\nReads enough bytes from hardware random number generator …\nReads a single word from the serial interface\nReads the word stored in the shift register\nSends a word to the slave\nSets a new duty cycle\nSets a new duty cycle\nDrives the pin high\nDrives the pin low\nSets a new PWM period\nSets the resolution of the capture timer\nStarts a new count down\nStarts the watchdog with a given period, typically once …\nToggle pin output.\nSends <code>words</code> to the slave. Returns the <code>words</code> received from …\nUnwraps a result, returning the content of an <code>Ok</code>.\nNon-blockingly “waits” until the count down finishes\nWrites bytes to slave with address <code>address</code>\nSends <code>words</code> to the slave, ignoring all the incoming words\nWrites a single word to the serial interface\nWrites a <code>char</code> into this writer, returning whether the …\nWrites bytes to slave with address <code>address</code> and then reads …\nWrites a string slice into this writer, returning whether …\nNo prescaling, the IO clock drives the timer directly.\nDivide the IO clock by 1024.\nDivide the IO clock by 256.\nDivide the IO clock by 64.\nDivide the IO clock by 8.\nClock prescaler for PWM\nImplement traits and types for PWM timers\nUse <code>TC0</code> for PWM (pins <code>PD5</code>, <code>PD6</code>)\nUse <code>TC1</code> for PWM (pins <code>PB1</code>, <code>PB2</code>)\nUse <code>TC2</code> for PWM (pins <code>PB3</code>, <code>PD3</code>)\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWrapper for the CS pin\nOrder of data transmission, either MSB first or LSB first\nOscillator Clock Frequency division options.\nSettings to pass to Spi.\nInternal trait for low-level SPI peripherals\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\n(Re)create a <code>ChipSelectPin</code> from a real <code>Pin&lt;&gt;</code> object.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert this <code>ChipSelectPin</code> into the underlying “real” …\nCheck the interrupt flag to see if the write has completed\nRead a byte from the data register\nDisable the peripheral\nSets up the control/status registers with the right …\nPerform a transaction of a single byte\nWrite a byte to the data register, which begins …\nRepresentation of a USART baudrate\nInternal trait for low-level USART peripherals.\nThe baudrate calculation depends on the configured clock …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalculate parameters for a certain baudrate at a certain …\nDisable this USART peripheral such that the pins can be …\nFlush all remaining data in the TX buffer.\nEnable &amp; initialize this USART peripheral to the given …\nEnable/Disable a certain interrupt.\nRead a byte from the RX buffer.\nWrite a byte to the TX buffer.\nValue of the <code>U2X#</code> bit\nValue of the <code>UBRR#</code> register\nConstruct a <code>Baudrate</code> from given <code>UBRR#</code> and <code>U2X#</code> values.")