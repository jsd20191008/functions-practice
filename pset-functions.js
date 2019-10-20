/***********
Problem: Triangles

Determine if a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has at least two sides the same length. (It is sometimes specified as having exactly two sides the same length, but for the purposes of this exercise we'll say at least two.)

A scalene triangle has all sides of different length

Create a function named `typeOfTriangle()` that accepts three (3) parameters s1, s2 and s3. The function will return

"equilateral" if the three (3) sides are the same
"isosceles" if two (2) sides are the same
"scalene" if all three (3) sides are different

"not a triangle" if any of the sides are <= 0

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. typeOfTriangle(4, 4, 4)

   Expected Result: "equilateral"

2. typeOfTriangle(0, 4, 7)

   Expected Result: "not a triangle"

3. typeOfTriangle(9, 8, 9)

   Expected Result: "isosceles"

4. typeOfTriangle(12, 8, 7)

   Expected Result: "scalene"

************/
console.log('Problem 1:')

// Add your code below this line

function typeOfTriangle(s1, s2, s3) {
  const uniqueValues = [...new Set([s1, s2, s3])]
  let result = ""

  if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
    result = "not a triangle"
  } else if (uniqueValues.length === 1) {
    result = "equilateral"
  } else if (uniqueValues.length === 2) {
    result = "isosceles"
  } else if (uniqueValues.length === 3) {
    result = "scalene"
  }
  console.log(result)
}

typeOfTriangle(4, 4, 4)
typeOfTriangle(0, 4, 7)
typeOfTriangle(9, 8, 9)
typeOfTriangle(12, 8, 7)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********

Problem: Phone Number Cleaner

Your task is to clean up differently formatted telephone numbers by removing punctuation and the country code (1) if present.

Create a function that accepts a formatted "phoneNumber" and removes all punctuation and an leading (1) if present

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. phoneNumberCleaner("+1 (613)-995-0253")

   Expected Result: 6139950253

2. phoneNumberCleaner("613-995-0253")

   Expected Result: 6139950253

3. phoneNumberCleaner("1 613 995 0253")

   Expected Result: 6139950253

4. phoneNumberCleaner("613.995.0253")

   Expected Result: 6139950253

************/
console.log('Problem 2:')

// Add your code below this line

function phoneNumberCleaner(number) {
  let result = number.replace(/[^\d]/g, '').slice(-10)
  console.log(result)

}

phoneNumberCleaner("+1 (613)-995-0253")
phoneNumberCleaner("613-995-0253")
phoneNumberCleaner("1 613 995 0253")
phoneNumberCleaner("613.995.0253")


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Wordy Math

Parse and evaluate simple math word problems returning the answer as an integer.

Create a function that accepts a "mathProblem" as a parameter and translate that word problem into an integer based math problems and returns an integer representing the answer

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordyMath("What is 5 plus 13?")

   Expected Result: 18

2. wordyMath("What is 7 minus 5?")

   Expected Result: 2

3. wordyMath("What is 6 multiplied by 4?")

   Expected Result: 24

4. wordyMath("What is 25 divided by 5?")

   Expected Result: 24 <- I think this should be 5

************/
console.log('Problem 3:')

// Add your code below this line

function wordyMath(problem) {
 const string = problem.split(' ')
 const num1 = parseInt(string[2])
 let num2 = 0

 if (Number.isInteger(parseInt(string[4]))) {
    num2 =  parseInt(string[4])
 } else {
    num2 =  parseInt(string[5])
 }

 let result = ''

 if (string.includes('plus')) {
  result = num1 + num2
} else if (string.includes('minus')) {
  result = num1 - num2
} else if (string.includes('multiplied')) {
  result = num1 * num2
} else if (string.includes('divided')) {
  result = num1 / num2
}

console.log(result)

}

wordyMath("What is 5 plus 13?")
wordyMath("What is 7 minus 5?")
wordyMath("What is 6 multiplied by 4?")
wordyMath("What is 25 divided by 5?")

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Tags: functions

Problem: Nucleotide Count

The genetic language of every living thing on the planet is DNA. DNA is a large molecule that is built from an extremely long sequence of individual elements called nucleotides. 4 types exist in DNA and these differ only slightly and can be represented as the following symbols: 'A' for adenine, 'C' for cytosine, 'G' for guanine, and 'T' thymine.

Given a single stranded DNA string, compute how many times each nucleotide occurs in the string.

Create a function that accepts "dna" (string) and calculates how many times each nucleotide occurs in the string

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. nucleotideCount("GGGGGTAACCCGG")

   Expected Result: { 'A': 2, 'T': 1, 'C': 3, 'G': 7 }

2. nucleotideCount("'GGGGGGGG'")

   Expected Result: { 'A': 0, 'T': 0, 'C': 0, 'G': 8 }

3. nucleotideCount("CGATTGGG")

   Expected Result: { 'A': 1, 'T': 2, 'C': 1, 'G': 4 }

4. nucleotideCount("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")

   Expected Result: { 'A': 20, 'T': 21, 'C': 17, 'G': 12 } <- I believe C should be 12 and G is 17

************/
console.log('Problem 4:')

// Add your code below this line

function nucleotideCount(dna) {
  const a = dna.replace(/[^A]/g, "").length
  const t = dna.replace(/[^T]/g, "").length
  const c = dna.replace(/[^C]/g, "").length
  const g = dna.replace(/[^G]/g, "").length

  console.log(`"A": ${a}, "T": ${t}, "C": ${c}, "G": ${g}`);

}

nucleotideCount("GGGGGTAACCCGG")
nucleotideCount("'GGGGGGGG'")
nucleotideCount("CGATTGGG")
nucleotideCount("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
