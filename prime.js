

	var sum = 0;
	
		for(var number = 2; number <= 1000; number++){
			var IsPrimeNumber = true;
			for(var compare = 2; compare < number; compare++) {
				if(number %compare == 0){
					IsPrimeNumber = false;
				}
			}
		if(IsPrimeNumber == true) {
			console.log(number + " is prime number");
			sum = sum + number;
		}
	}
	console.log("The sum of the prime numbers is " + sum);