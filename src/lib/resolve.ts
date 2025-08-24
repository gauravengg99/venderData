import { IvenderProductList } from '..';

async function resolves(...fnc : (Promise<IvenderProductList[]>)[]) {
    const result = await Promise.all([...fnc]);
    return  result.flat();
}

export default resolves;