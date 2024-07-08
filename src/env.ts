const ENV = typeof process === 'undefined' ? (typeof window === 'undefined' ? {} : (window as any).ENV) : process.env

export default ENV
