#![no_std]
#![no_main]
#![feature(lang_items)]
#![feature(abi_avr_interrupt)]
#![deny(unsafe_op_in_unsafe_fn)]

mod std_stub;

use arduino_hal::prelude::*;
use avr_device::interrupt;

use embedded_hal_v0::serial::Read;

#[arduino_hal::entry]
fn main() -> ! {
    let dp = arduino_hal::Peripherals::take().unwrap();
    let pins = arduino_hal::pins!(dp);
    let mut serial = arduino_hal::default_serial!(dp, pins, 57600);

    unsafe { interrupt::enable() };

    ufmt::uwriteln!(&mut serial, "Hello from Arduino!\r").unwrap_infallible();

    loop {
        // Read a byte from the serial connection
        let b = nb::block!(serial.read()).unwrap_infallible();

        // Answer
        ufmt::uwriteln!(&mut serial, "Got {}!\r", b).unwrap_infallible();
    }
}
