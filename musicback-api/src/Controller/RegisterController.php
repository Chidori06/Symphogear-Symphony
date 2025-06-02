<?php

namespace App\Controller;

use ApiPlatform\Validator\Exception\ValidationException;
use ApiPlatform\Validator\ValidatorInterface;
use App\Entity\Book;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsController]
class RegisterController extends AbstractController
{

    private $em;
    private $hasher;

    private $validator;

    public function __construct(
        EntityManagerInterface $em,
        UserPasswordHasherInterface $hasher,
        ValidatorInterface $validator
    ) {
        $this->em = $em;
        $this->hasher = $hasher;
        $this->validator = $validator;
    }

    public function __invoke(\App\Entity\User $user): \App\Entity\User
    {

        $errors = $this->validator->validate($user);

        if ($errors) {
            throw new ValidationException($errors);
        }

        $user->setPassword($this->hasher->hashPassword($user, $user->getPassword()));

        $this->em->persist($user);
        $this->em->flush();

        return $user;
    }
}
?>