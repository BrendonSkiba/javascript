class FizzBuzz {
	public static void main(String args[]){
	int n; // n is the number
	
		for (n = 1; n < 101; n++) {
			if ( n % 3 == 0){
			System.out.print("Fizz");
			}
			System.out.print("Buzz");
			System.out.print("FizzBuzz");
			if ((n % 3 !=0)&&(n % 5 !=0)){
			System.out.println(n);
		}
	}
}
