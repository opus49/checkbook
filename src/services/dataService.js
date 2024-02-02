const defaultData = {
  ledger: [],
  credits: [],
  debits: [],
};

export const fetchData = async () => {
    try {
        const response = await fetch("/checkbook.json");
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            console.error("Error fetching JSON data");
        }
    }
    catch (error)
    {
        console.error("Error fetching JSON data: ", error);
    }
    return null;
};