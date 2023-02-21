const isG = fancyNumber => fancyNumber % 3 === 0;
const isN = fancyNumber => fancyNumber % 5 === 0;

const vendorService = {
  /**
   * - If the fancyNumber is a multiple of 3, return "G",
   * - If the fancyNumber is a multiple of 5, return "N",
   * - If the fancyNumber is a multiple of both 3 and 5, return "GN";
   * - Otherwise return the provided fancyNumber.
   * @param {string} fancyNumber - is number-based as per validation
   * @return {string}
   */
  getString(fancyNumber) {
    const fancyNumberInt = +fancyNumber;
    const shouldReturnG = isG(fancyNumberInt);
    const shouldReturnN = isN(fancyNumberInt);
    
    if (!shouldReturnG && !shouldReturnN) {
      return fancyNumber;
    }

    let output = '';

    if (shouldReturnG) {
      output += 'G';
    }

    if (shouldReturnN) {
      output += 'N';
    }

    return output;
  }
}

module.exports = vendorService;