export default function formatRupees(amount) {
  if (isNaN(amount)) {
    return "Invalid Input";
  }

  if (amount < 100000) {
    return `${amount.toFixed(2)}`;
  } else if (amount < 10000000) {
    return `${(amount / 100000).toFixed(2)} La`;
  } else {
    return `${(amount / 10000000).toFixed(2)} Cr`;
  }
}
