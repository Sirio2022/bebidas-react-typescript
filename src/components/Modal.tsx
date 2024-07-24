import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Fragment } from 'react';
import { useRecipe } from '../hooks/useRecipe';
import { useFavorites } from '../hooks/useFavorites';

export default function Modal() {
  const { modalIsOpen, setCloseModal, selectedRecipe, renderIngredients } =
    useRecipe();

  const { setFavorites, existFavorite } = useFavorites();

  return (
    <>
      <Transition appear show={modalIsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setCloseModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-4xl font-extrabold my-5 text-center"
                  >
                    {selectedRecipe.strDrink}
                  </DialogTitle>

                  <img
                    src={selectedRecipe.strDrinkThumb}
                    alt={selectedRecipe.strDrink}
                    className="w-full h-96 object-cover"
                  />

                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Ingredients 🍹
                  </DialogTitle>

                  {renderIngredients()}

                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Instructions 📝
                  </DialogTitle>
                  <p className="text-gray-600 text-lg font-medium">
                    {selectedRecipe.strInstructions}
                  </p>

                  <div className="mt-5 flex justify-between gap-4">
                    <button
                      type="button"
                      className="mt-5 inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-gray-700 focus:outline-none"
                      onClick={setCloseModal}
                    >
                      Close
                    </button>

                    <button
                      type="button"
                      className={
                        existFavorite(selectedRecipe.idDrink)
                          ? 'mt-5 inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-600 focus:outline-none'
                          : 'mt-5 inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-500 text-base font-medium text-white hover:bg-orange-600 focus:outline-none'
                      }
                      onClick={() => setFavorites([selectedRecipe])}
                    >
                      {existFavorite(selectedRecipe.idDrink)
                        ? 'Remove from favorites'
                        : 'Add to favorites'}
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
