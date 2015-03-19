describe('Celsius/Fahrenheit', function() {
  describe('celsiusToFahrenheit', function() {
    it('converts 0C to 32F', function() {
      expect(celsiusToFahrenheit(0)).toEqual(32);
    });

    it('converts 10C to 50F', function() {
      expect(celsiusToFahrenheit(10)).toEqual(50);
    });

    it('converts negative numbers', function() {
      expect(celsiusToFahrenheit(-10)).toEqual(14);
    });
  });

  describe('fahrenheitToCelsius', function() {
    it('converts 32F to 0F', function() {
      expect(fahrenheitToCelsius(32)).toEqual(0);
    });

    it('converts 50F to 10C', function() {
      expect(fahrenheitToCelsius(50)).toEqual(10);
    });

    it('converts negative numbers', function() {
      expect(fahrenheitToCelsius(-10)).toBeCloseTo(-23.33);
    });
  });

  describe('dom interaction', function() {
    var jasmineContent;

    beforeEach(function () {
      jasmineContent = document.getElementById('jasmine_content');
    });

    afterEach(function() {
      jasmineContent.innerHTML = '';
    });

    describe('onToFarenheintClick', function() {
      var input, button, result;

      beforeEach(function() {
        jasmineContent.innerHTML = '<input type="text" id="celsius" />' +
          '<button id="to_f">To Fahrenheit</button>' +
          '<span id="c_to_f_result"></span>';

        input = document.getElementById('celsius');
        button = document.getElementById('to_f');
        result = document.getElementById('c_to_f_result');

        bindClicks();
      });

      it('sets the calculation result from the value in the input', function() {
        input.value = '10';
        button.click();
        expect(result.innerHTML).toEqual('50');
      });

      describe('when given invalid input', function(){
        it('does not set the calculation result if given letters', function() {
          input.value = 'abc';
          button.click();
          expect(result.innerHTML).toEqual('');
        });

        it('does not set the calculation result if given letters mixed with numbers', function() {
          input.value = 'abc123';
          button.click();
          expect(result.innerHTML).toEqual('');
        });

        it('does not set the calculation result if given an empty input', function() {
          input.value = '';
          button.click();
          expect(result.innerHTML).toEqual('');
        });
      });
    });

    describe('onToCelsiusClick', function() {
      var input, button, result;

      beforeEach(function() {
        jasmineContent.innerHTML = '<input type="text" id="fahrenheit" />' +
          '<button id="to_c">To Celsius</button>' +
          '<span id="f_to_c_result"></span>';

        input = document.getElementById('fahrenheit');
        button = document.getElementById('to_c');
        result = document.getElementById('f_to_c_result');

        bindClicks();
      });

      it('sets the calculation result from the value in the input', function() {
        input.value = '68';
        button.click();
        expect(result.innerHTML).toEqual('20');
      });

      describe('when given invalid input', function(){
        it('does not set the calculation result if given letters', function() {
          input.value = 'abc';
          button.click();
          expect(result.innerHTML).toEqual('');
        });

        it('does not set the calculation result if given letters mixed with numbers', function() {
          input.value = 'abc123';
          button.click();
          expect(result.innerHTML).toEqual('');
        });

        it('does not set the calculation result if given an empty input', function() {
          input.value = '';
          button.click();
          expect(result.innerHTML).toEqual('');
        });
      });
    });
  });
});
