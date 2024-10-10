// Step 1: Create MajorCredits and MinorCredits interfaces with a brand property
interface MajorCredits {
  credits: number;
  _brand: 'MajorCredits'; // Brand property
}

interface MinorCredits {
  credits: number;
  _brand: 'MinorCredits'; // Brand property
}

// Step 2: Create sumMajorCredits and sumMinorCredits functions

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: 'MajorCredits' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: 'MinorCredits' };
}
