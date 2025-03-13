export function HashMap(){
    let capacity = 16;
    const loadFactor = 0.75;
    let buckets = new Array(capacity).fill(null);
    let size = 0;
    
    function hash(key, mod = capacity){
        let hashCode = 0;
        const primeNumber = 31;
        for(let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % mod;
        }

        return hashCode
    }

    function set(key, value){
        const hash_key = hash(key, capacity);
        if(buckets[hash_key] === null){
             buckets[hash_key] = [];
        }

        const bucket = buckets[hash_key];
        for(let pair of bucket){
            if(pair[0] === key){
                pair[1] = value;
                return;
            }
        }
        
        bucket.push([key, value]);
        size++;

        if(size / capacity > loadFactor){
            resize();
        }
    }

    function resize(){
        const newCapacity = capacity * 2;
        const newBuckets =  new Array(newCapacity).fill(null);

        for(const bucket of buckets){
            if(bucket !== null){
                for(const [key, value] of bucket){
                    const newHash = hash(key, newCapacity);
                    if(!newBuckets[newHash]){
                        newBuckets[newHash] = [];
                    }
                    newBuckets[newHash].push([key, value])
                }
            }
        }

        capacity = newCapacity;
        buckets = newBuckets;
    }

    function get(key){
       let bucket_no = hash(key, capacity);
       let bucket = buckets[bucket_no]
       if(bucket === null){
        return null;
       }
       for(const [storedKey, value] of bucket){
        if(storedKey === key){
            return value;
        }
       }
       return null;
    }

    function has(key){
        let bucket_no = hash(key, capacity);
        let bucket = buckets[bucket_no];
        if(bucket === null){
            return false;
        }
        for(const[storedKey, value] of bucket){
            if(storedKey === key){
                return true;
            }
        }
        return false;
    }

    function remove(key){
        let bucket_no = hash(key, capacity);
        let bucket = buckets[bucket_no];
        if(bucket === null){
            return false;
        }
        for(let i = 0; i < bucket.length; i++){
            if(bucket[i][0] === key){
                bucket.splice(i, 1);
                size--;

                if(bucket.length === 0){
                    buckets[bucket_no] = null;
                }
                return true;
            }
        }
        return false;
    }

    function length(){
        return size;
    }

    function clear(){
        buckets = new Array(capacity).fill(null);
        size = 0;
    }

    function keys(){
        let keys = []
        for(const bucket of buckets){
            if(bucket !== null){
                for(const [key, value] of bucket){
                    keys.push(key);
                }
            }
        }
        return keys;
    }

    function values(){
        let values = [];
        for(const bucket of buckets){
            if(bucket !== null){
                for(const [key, value] of bucket){
                    values.push(value);
                }
            }
        }
        return values;
    }

    function entries(){
        let key_value = [];
        for(const bucket of buckets){
            if(bucket !== null){
                for(const [key, value] of bucket){
                    key_value.push([key, value]);
                }
            }
        }
        return key_value;
    }

    return {
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries
    };
}


