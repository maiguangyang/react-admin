interface ExpiredType {
  expired: number,
}

type IStorageDataType<T> = Partial<ExpiredType> & {
  data?: T,
}

type clearType = {
  [key: string]: string[],
}

class LocalStorage {
  expired: number;
  constructor() {
    this.expired = 60 * 60 * 24 * 7;
  }

  set<T>(name: string, value: T, expired = this.expired) {
    if (typeof expired === 'number' && name && !!(value + '')) {
      const timestamp = new Date().getTime() / 1000;
      const objData: IStorageDataType<T> = {
        data: value,
        expired: timestamp + expired,
      };
      localStorage.setItem(name, JSON.stringify(objData));
    }
  }

  get<T>(name: string): IStorageDataType<T> {
    const timestamp = new Date().getTime() / 1000;
    let data: ExpiredType;

    try {
      data = JSON.parse(localStorage[name]);
    } catch {
      data = { expired: 0 };
    }

    if (data.expired <= timestamp) {
      this.remove(name);
      return {};
    }
    return data;
  }

  remove(name: string) {
    localStorage.removeItem(name);
  }

  clear(item?: clearType | string) {
    if (typeof item === 'string') {
      this.remove(item as string);
      return;
    }

    const data = localStorage;
    for (const i in data) {
      if (!(item as clearType)?.not || (item as clearType).not.indexOf(i) === -1) {
        this.remove(i);
      }
    }
  }
}

export default new LocalStorage();
