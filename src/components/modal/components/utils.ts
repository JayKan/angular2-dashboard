function booleanOrValue(value) {
  if (value === 'true')
    return true;
  else if (value === 'false')
    return false;
  return value;
}

function toPromise<T>(observable: Observable<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    observable.subscribe(next => {
      resolve(next);
    }, error => {
      reject(error);
    });
  });
}

export { 
  booleanOrValue,
  toPromise
};





