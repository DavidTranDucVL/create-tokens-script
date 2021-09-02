import { wordList1, wordList2, wordList3, wordList4, wordList5, wordList6 } from "./data"
import * as fs from 'fs'
import * as path from 'path'

const TRANSFER = 200000000

const mintQuery = (policyId: string, tokenNames: string[], txin: string, outAddress: string, amount: number, fee = 2000000) => {
  const change = amount - fee
  const txOutTokens = tokenNames.map((tokenName) => `+"1000000000 ${policyId}.${tokenName}"`).join('')
  const mint = `"${tokenNames.map((tokenName) => `1000000000 ${policyId}.${tokenName}`).join('+')}"`
  return `cardano-cli transaction build-raw --mary-era --fee ${fee} --out-file tx.raw --tx-in ${txin} --tx-out ${outAddress}+${change}${txOutTokens} --mint=${mint}`
}

const sendQuery = (policyId: string, tokenNames: string[], txin: string, outAddress: string, changeAddress: string, amount: number, fee = 2000000) => {
  const change = amount - fee - TRANSFER
  const txOutTokens = tokenNames.map((tokenName) => `+"1000000000 ${policyId}.${tokenName}"`).join('')
  return `cardano-cli transaction build-raw --mary-era --fee ${fee} --out-file tx.raw --tx-in ${txin} --tx-out ${changeAddress}+${change} --tx-out ${outAddress}+${TRANSFER}${txOutTokens}`
}

const write = (filename: string, out: string) => fs.writeFile(path.join('out', filename), out, () => null)

const POLICY_ID = "74ffde9a5fcce202e00376ee26f627f4d35edb972e3e305c5825279f"
const MINTING_ADDRESS = "addr_test1vz6s9m4c2qrrs9r7f6xe9m2wtj5g9cswn22amelp7ver0cqlv7pcg"
const ADLT_ADDRESS = "addr_test1qqmgzwgsxunvm933n8znhgy09hvf4nz698hmxlzu4ytlep5qa0ghh9qzm4fj56fvxq8emltv4yn3ays4ww7vh70n2g0q64m94t"

write('mintQuery2.cmd', mintQuery(POLICY_ID, wordList2, "1fde70dd73d2e6bbb9e9fade11ce61d299a1fc733daa874dd75b23754ff9c43c#0", MINTING_ADDRESS, 796000000))
write('sendQuery2.cmd', sendQuery(POLICY_ID, wordList2, "f71fbb3e0810604acb1216f43b0f39254ebc9040dea4b6c4abd0ac2f72f3fee0#0", ADLT_ADDRESS, MINTING_ADDRESS, 794000000))
write('mintQuery3.cmd', mintQuery(POLICY_ID, wordList3, "76b6df2d009fa78d4875cc69b043367b4f03f97758a3a24a514782febe185728#0", MINTING_ADDRESS, 1591633764))
write('sendQuery3.cmd', sendQuery(POLICY_ID, wordList3, "da1fa94b2ddc3beb7eac4514c27a00cf98f9072a2c3375bde50741a22cbd1e7d#0", ADLT_ADDRESS, MINTING_ADDRESS, 1589633764))
write('mintQuery4.cmd', mintQuery(POLICY_ID, wordList4, "a8fc85016ca9d89dfb00808da978b440743cce9718a6212660251932248bdaed#0", MINTING_ADDRESS, 1387633764))
write('sendQuery4.cmd', sendQuery(POLICY_ID, wordList4, "53d1980a1ea54ddfab95f7dc57762c471d61c1a6f575d84cbb8a2b296c8bda4e#0", ADLT_ADDRESS, MINTING_ADDRESS, 1385633764))
write('mintQuery5.cmd', mintQuery(POLICY_ID, wordList5, "2ca830b82d3eaf060041f5aa316398880a809792420f1f4beaec13add6679391#0", MINTING_ADDRESS, 1183633764))
write('sendQuery5.cmd', sendQuery(POLICY_ID, wordList5, "35b129e0642e2538fc4fa309ba61a0c677ca4da71aadf9cc29c9bbbf52e30182#0", ADLT_ADDRESS, MINTING_ADDRESS, 1181633764))
write('mintQuery6.cmd', mintQuery(POLICY_ID, wordList6, "14e88cfca7f1c317b9f70bbb4120debd38f7ba8cc31f156a693f1b7fb05bc1f6#0", MINTING_ADDRESS, 979633764))
write('sendQuery6.cmd', sendQuery(POLICY_ID, wordList6, "0db1b5d72354507442c334cac14e3618af6330c7660040354d319284ae046bc7#0", ADLT_ADDRESS, MINTING_ADDRESS, 977633764))
