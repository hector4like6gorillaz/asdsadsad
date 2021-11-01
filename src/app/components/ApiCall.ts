import axios from "axios";

//Utilizando la api principal
const URL: string = `${process.env.NEXT_PUBLIC_BASE_URL}`;

//Obtener una lectura de una api publica que no requiera login utilizando la base URL del .env
export async function envAPI(props: string) {
  try {
    const response = await axios({
      url: `${URL}${props}`,
      method: `GET`,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

//Obtener la lectura de una api publica sin utilizar una base URL en env
export async function API(props: string) {
  try {
    const response = await axios({
      url: `${props}`,
      method: `GET`,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

//Generalmente se utiliza esta funcion para obtener datos de un login
export const ApiPost = async (props: string, dat: {}) => {
  try {
    const resp = await axios.post(`${URL}${props}`, dat);
    return resp;
  } catch (err) {
    return err;
  }
};

//Generalmente se utiliza esta funcion para patch teniendo ya un bearer token
export const ApiBearerPatch = async (
  url: string,
  tokken: string | undefined,
  dat: {}
) => {
  try {
    const resp = await axios.patch(`${URL}${url}`, dat, {
      headers: {
        Authorization: `Bearer ${tokken}`,
      },
    });
    return resp;
  } catch (err) {
    return err;
  }
};

//Leer datos de una api privada que necesite un acces token con URL en un .env
export async function envApiDirToken(
  props: string,
  tokken: string | undefined
) {
  try {
    const resp = await axios.get(`${URL}${props}`, {
      headers: {
        Authorization: `Bearer ${tokken}`,
      },
    });
    return resp;
  } catch (e) {
    console.log(e);
    return e;
  }
}

//Leer datos de una api privada que necesite un acces token con URL mandada como argumento
export async function ApiURLToken(url: string, tokken: string | undefined) {
  try {
    const resp = await axios.get(`${url}`, {
      headers: {
        Authorization: `Bearer ${tokken}`,
      },
    });
    return resp;
  } catch (e) {
    console.log(e);
    return e;
  }
}

/*
const response = async (page: string) => envAPI(page);
useEffect(() => {
        async function loadapi() {
            const resp = await response("all");
            const data = resp?.data;
            HandleApiData(data);
        }
        loadapi();
        return function cleanup() {
            loadapi();
        }
    }, []);
*/
