import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Lend,
  LoanCreation,
  LoanLiquidation,
  LoanPayback,
  Withdraw
} from "../generated/FlexLoanVault/FlexLoanVault"

export function createLendEvent(
  lender: Address,
  amount: BigInt,
  timestamp: BigInt
): Lend {
  let lendEvent = changetype<Lend>(newMockEvent())

  lendEvent.parameters = new Array()

  lendEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  lendEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  lendEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return lendEvent
}

export function createLoanCreationEvent(
  borrower: Address,
  collateralTargetAddress: Address,
  collateralTargetTokenId: BigInt,
  loanAmount: BigInt,
  duration: BigInt,
  interestRate: BigInt,
  timestamp: BigInt
): LoanCreation {
  let loanCreationEvent = changetype<LoanCreation>(newMockEvent())

  loanCreationEvent.parameters = new Array()

  loanCreationEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  loanCreationEvent.parameters.push(
    new ethereum.EventParam(
      "collateralTargetAddress",
      ethereum.Value.fromAddress(collateralTargetAddress)
    )
  )
  loanCreationEvent.parameters.push(
    new ethereum.EventParam(
      "collateralTargetTokenId",
      ethereum.Value.fromUnsignedBigInt(collateralTargetTokenId)
    )
  )
  loanCreationEvent.parameters.push(
    new ethereum.EventParam(
      "loanAmount",
      ethereum.Value.fromUnsignedBigInt(loanAmount)
    )
  )
  loanCreationEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )
  loanCreationEvent.parameters.push(
    new ethereum.EventParam(
      "interestRate",
      ethereum.Value.fromUnsignedBigInt(interestRate)
    )
  )
  loanCreationEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return loanCreationEvent
}

export function createLoanLiquidationEvent(
  borrower: Address,
  amount: BigInt,
  timestamp: BigInt
): LoanLiquidation {
  let loanLiquidationEvent = changetype<LoanLiquidation>(newMockEvent())

  loanLiquidationEvent.parameters = new Array()

  loanLiquidationEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  loanLiquidationEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  loanLiquidationEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return loanLiquidationEvent
}

export function createLoanPaybackEvent(
  borrower: Address,
  amount: BigInt,
  timestamp: BigInt
): LoanPayback {
  let loanPaybackEvent = changetype<LoanPayback>(newMockEvent())

  loanPaybackEvent.parameters = new Array()

  loanPaybackEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  loanPaybackEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  loanPaybackEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return loanPaybackEvent
}

export function createWithdrawEvent(
  lender: Address,
  amount: BigInt,
  timestamp: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return withdrawEvent
}
