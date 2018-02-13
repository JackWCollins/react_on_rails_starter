Types::PaymentType = GraphQL::ObjectType.define do
  name 'Payment'
  description 'A simple object to keep track of who paid this season'

  field :id, !types.ID
  field :paid_at, types.DateTime
  field :amount, types.Float
  field :pool_entry, -> { !Types::PoolEntryType }
end